import * as React from 'react';
import classnames from 'classnames';
import { observer } from "mobx-react";
import ViewStore from "../../store/ViewStore";

@observer
class TitleBlock extends React.Component<{
    store: ViewStore,
    onDoubleClick: React.MouseEventHandler,
    isActive: boolean
}> {
    handleTitleChange = ({ target: { value: title } }: React.ChangeEvent<HTMLInputElement>) => this.props.store.setTitle(title)

    render() {
        const { title, date } = this.props.store;
        const { isActive, onDoubleClick } = this.props;

        return (
            <section className={classnames("block","title", {active: isActive})} onDoubleClick={onDoubleClick}>
                <h1><input className="title" onChange={this.handleTitleChange} type="text" value={title} /></h1>
                <span className="time">
                    保存时间：{date.toLocaleString()}
                </span>
                <span className="type-tag">标 题</span>
            </section>
        )
    }
}

export default TitleBlock;