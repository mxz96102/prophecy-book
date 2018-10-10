import * as React from 'react';
import Dialog from 'rc-dialog';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { observer, inject } from 'mobx-react';
import ViewStore from '../../store/ViewStore';

const options = {
    mode: 'javascript',
    theme: 'idea',
    lineNumbers: true,
}

const ChartDialog: React.SFC<{
    store?: ViewStore
}> = ({ store }) =>
        <Dialog style={{ margin: '200px auto' }} title="插入Chart" visible={store.openedDialog === "CHART"} onClose={() => store.closeDialog()}>
            转换脚本：
            <CodeMirror
                options={options}
                onBeforeChange={() => { }}
                value=""
            />
            数据类型：
            <select>
                <option value="SCATTER">冒泡图</option>
            </select>
            <br />
            <button>
                确认提交
            </button>
        </Dialog>
    ;

export default inject('store')(observer(ChartDialog));