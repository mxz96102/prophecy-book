import * as React from 'react';
import classnames from 'classnames';
import { observer } from "mobx-react";

@observer
class TitleBlock extends React.Component<{}> {
    handleTitleChange = ({ target: { value: title } }) => this.props.store.setTitle(title)

    render() {
        const { title } = this.props.store;
        const { isActive } = this.props;

        return (
            <section className="block title">
                <h1><input className={classnames("title", {})} onChange={this.handleTitleChange} type="text" value={title} /></h1>
                <span className="time">
                    2018.09.26
                </span>
                <span className="type-tag">标 题</span>
            </section>
        )
    }
}

export default TitleBlock;