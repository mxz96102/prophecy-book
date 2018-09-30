import * as React from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import ViewStore from "../../store/ViewStore";
import { Icon } from 'react-fa';

const Toolbar: React.SFC<{
  store?: ViewStore
}> = ({ store, store: { selectedSeg } }) =>
  <div className="toolbar">
    <span className="tool" onClick={() => store.newSeg('TEXT', {}, "双击修改markdown文本")}>
      <Icon name="plus-square" /> 文本块
          </span>
    <span className="tool" onClick={() => store.newSeg("CODE", {}, "")}>
      <Icon name="plus-square" /> 代码块
          </span>
    <span className="tool" onClick={() => store.deleteSelectSeg()}>
      <Icon name="minus-square" /> 删除块
          </span>
    <span className={classnames("tool", { disabled: !selectedSeg || selectedSeg.type !== "CODE" })} onClick={() => store.runNowCode()}>
      <Icon name="play" /> 运行Code
          </span>
    <span className="tool" onClick={() => store.runAllCode()}>
      <Icon name="forward" /> 所有Code
          </span>
    <span className="tool" onClick={() => store.saveToFile()}>
      <Icon name="save" /> 保存到文件
          </span>
    <span className="tool">
      <Icon name="upload" /> <a href="javascript;;" className="upload"><input type="file" onChange={e => store.readJson(e.target.files[0])} /> 读取文件</a>
    </span>
  </div>


export default inject('store')(observer(Toolbar));