import * as React from 'react';
import classnames from 'classnames';
import { observer, inject } from "mobx-react";
import ViewStore from "../../store/ViewStore";

const TitleBlock: React.SFC<{
    store?: ViewStore,
    onDoubleClick: React.MouseEventHandler,
    isActive: boolean
}> = inject('store')(observer(({ store: { title, date, setTitle }, isActive, onDoubleClick }) =>
    <section className={classnames("block", "title", { active: isActive })} onDoubleClick={onDoubleClick}>
        <h1>
            <input className="title" onChange={({ target: { value: title } }: React.ChangeEvent<HTMLInputElement>) => setTitle(title)} type="text" value={title} />
        </h1>
        <span className="time">
            保存时间：{date.toLocaleString()}
        </span>
        <span className="type-tag">标 题</span>
    </section>
))

export default TitleBlock;