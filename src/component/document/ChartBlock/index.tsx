import * as React from 'react';
import {observer, inject} from 'mobx-react';
import classnames from 'classnames';
import SegmentModel from '../../../model/SegmentModel';
import ViewStore from '../../../store/ViewStore';
import ScatterChart from './ScatterChart';

const ChartBlock: React.SFC<{
    store?: ViewStore,
    onDoubleClick: React.MouseEventHandler,
    isActive: boolean,
    segment: SegmentModel,
    key: string
}> = ({ isActive = false, onDoubleClick, segment }) =>
<section className={classnames("block", "chart", { active: isActive })} onDoubleClick={onDoubleClick}>
    {
        () => {
            switch(segment.data.type) {
                case 'SCATTER':
                return <ScatterChart id={segment.id} data={segment.data}/>
                default:
                return <p>未知类型Chart</p>
            }
        }
    }
    <span className="type-tag">📈 图表</span>
</section>

export default inject('store')(observer(ChartBlock));