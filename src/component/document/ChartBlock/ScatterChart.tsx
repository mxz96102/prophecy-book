import * as React from 'react';
import * as G2 from '@antv/g2/src';

interface IScatter {
    xDesc?: string,
    yDesc?: string,
    data: Array<{
        x: number,
        y: number,
        type: string
    }>
}

export default class ScatterChart extends React.Component<{
    data: IScatter,
    id: string
}> {
    componentDidMount() {
        const { id, data: { data } } = this.props;
        const chart = new G2.Chart({
            container: `chart-${id}`,
            forceFit: true
        });

        chart.source(data);

        chart.point().position('x*y').color('type').size(4).opacity(0.65).shape('circle');

        chart.render()
    }

    render() {
        const { id } = this.props;
        return (
            <div className="chart" id={`chart-${id}`}></div>
        )
    }
}