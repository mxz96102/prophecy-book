import * as React from 'react';
import classnames from 'classnames';
import md from 'markdown-it';
import { observer } from "mobx-react";
import { Controlled as CodeMirror } from 'react-codemirror2';
require("codemirror/mode/markdown/markdown");

const options = {
    mode: 'markdown',
    theme: 'idea',
    lineNumbers: false
}

const markdown = new md();

@observer
class TextBlock extends React.Component<{}, { content: string }> {
    render() {
        const { isActive = false, onDoubleClick, segment } = this.props;

        return (
            <section className={classnames("block","text", {active: isActive})} onDoubleClick={onDoubleClick}>
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
        )
    }
}

export default TextBlock;