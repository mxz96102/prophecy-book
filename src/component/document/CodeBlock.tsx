import * as React from 'react';
import classnames from 'classnames';
import ViewStore from "../../store/ViewStore";
import { observer } from "mobx-react";
import { Controlled as CodeMirror } from 'react-codemirror2';
import SegmentModel from '../../model/SegmentModel';
import "codemirror/mode/javascript/javascript";

const options = {
    mode: 'javascript',
    theme: 'idea',
    lineNumbers: false,
}

const CodeBlock:React.SFC<{
    store?: ViewStore,
    onDoubleClick: React.MouseEventHandler,
    isActive: boolean,
    segment: SegmentModel,
    key: string
}> = observer(['store'], ({ onDoubleClick, isActive, segment }) =>
    <section className={classnames("block", "code", { active: isActive })} onDoubleClick={onDoubleClick}>
        <CodeMirror
            value={segment.content}
            options={options}
            onBeforeChange={(editor, data, value) => {
                segment.setContent(value)
            }}
        />
        <pre className="result">
            {segment.data && JSON.stringify(segment.data, null, 2)}
        </pre>
        <span className="type-tag">代 码</span>
    </section>
)

export default CodeBlock;