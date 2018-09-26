import * as React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
require("codemirror/mode/javascript/javascript");

const options = {
    mode: 'javascript',
    theme: 'idea',
    lineNumbers: false
}

class CodeBlock extends React.Component<{}, { title: string }> {
    state = {
        code: [
            "const a = 1200;",
            "const b = [11,23,345,54,23,23];",
            "",
            "global.put('a', a);",
            "global.put('b', b);",
            "",
            "global.end();"
        ].join("\n")
    }

    render() {
        const { title } = this.state;
        const { onClick } = this.props;

        return (
            <section className="block code" onClick={onClick}>
                <CodeMirror
                    value={this.state.code}
                    options={options}
                    onBeforeChange={(editor, data, value) => {
                        this.setState({ code: value });
                    }}
                />
                <pre className="result">
                    "a": 1200,
                    "b": [11,23,345,54,23,23]
                </pre>
                <span className="type-tag">代 码</span>
            </section>
        )
    }
}

export default CodeBlock;