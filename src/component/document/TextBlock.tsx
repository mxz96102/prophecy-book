import * as React from 'react';
import classnames from 'classnames';
import * as MarkdownIt from "markdown-it";
import { observer, inject } from "mobx-react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import ViewStore from "../../store/ViewStore";
import SegmentModel from '../../model/SegmentModel';
require("codemirror/mode/markdown/markdown");

const options = {
    mode: 'markdown',
    theme: 'idea',
    lineNumbers: false
}

const markdown = new MarkdownIt();

const TextBlock: React.SFC<{
    store?: ViewStore,
    onDoubleClick: React.MouseEventHandler,
    isActive: boolean,
    segment: SegmentModel,
    key: string
}> = inject('store')(observer(({ isActive = false, onDoubleClick, segment }) =>
    <section className={classnames("block", "text", { active: isActive })} onDoubleClick={onDoubleClick}>
        {
            isActive
                ? <CodeMirror
                    value={segment.content}
                    options={options}
                    onBeforeChange={(editor, data, value) => {
                        segment.setContent(value)
                    }}
                />
                : <div className="md-text" dangerouslySetInnerHTML={{ __html: markdown.render(segment.content) }}></div>
        }
        <span className="type-tag">Markdown</span>
    </section>
))

export default TextBlock;