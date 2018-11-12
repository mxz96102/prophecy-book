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
            图表名称：
            <input type="text" onChange={({target: {value}}) => store.setDialogData('title', value)}/><br/>
            转换脚本：
            <CodeMirror
                options={options}
                onBeforeChange={(editor, data, value) => store.setDialogData('content', value)}
                value={store.dialogData.content}
            />
            数据类型：
            <select onChange={({target: {value}}) => store.setDialogData('type', value)}>
                <option value="SCATTER">冒泡图</option>
            </select>
            <br/>
            <button className="dlg-btn" onClick={() => {store.addChartDialog();store.closeDialog()}}>
                确认提交
            </button>
        </Dialog>
    ;

export default inject('store')(observer(ChartDialog));