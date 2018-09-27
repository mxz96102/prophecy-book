import * as React from 'react';
import classnames from 'classnames';
import { observer } from "mobx-react";
import { Controlled as CodeMirror } from 'react-codemirror2';
require("codemirror/mode/javascript/javascript");

const options = {
    mode: 'javascript',
    theme: 'idea',
    lineNumbers: false,
}

@observer
class CodeBlock extends React.Component<{}, { title: string }> {
    instance:any = null;

    render() {
        const { onDoubleClick, isActive, segment } = this.props;

        return (
            <section className={classnames("block","code", {active: isActive})} onDoubleClick={onDoubleClick}>
                <CodeMirror
                    value={segment.content}
                    options={options}
                    onBeforeChange={(editor, data, value) => {
                        segment.setContent(value)
                    }}
                    editorDidMount={editor => { this.instance = editor }}
                />
                <pre className="result">
                    {segment.data && JSON.stringify(segment.data, null, 2)}
                </pre>
                <span className="type-tag">代 码</span>
            </section>
        )
    }
}

export default CodeBlock;