import * as React from 'react';
import { markdown } from 'markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
require("codemirror/mode/markdown/markdown");

const options = {
    mode: 'markdown',
    theme: 'idea',
    lineNumbers: false
}

class TextBlock extends React.Component<{}, { content: string }> {
    state = {
        content: [
            "## 第一步",
            "- 使用 `global.set` 来设定数据",
            "- 使用 `global.get` 获取数据",
            "- 使用 `global.end` 结束当前代码块运行"
        ].join('\n')
    }

    handleTitleChange = ({ target: { value: title } }) => this.setState({ title })

    render() {
        const { content } = this.state;
        const { active = false, onClick } = this.props;

        return (
            <section className="block text" onClick={onClick}>
                {
                    active
                        ? <CodeMirror
                            value={this.state.content}
                            options={options}
                            onBeforeChange={(editor, data, value) => {
                                this.setState({ content: value });
                            }}
                        />
                        : <div className="md-text" dangerouslySetInnerHTML={{ __html: markdown.toHTML(content) }}></div>
                }
                <span className="type-tag">Markdown</span>
            </section>
        )
    }
}

export default TextBlock;