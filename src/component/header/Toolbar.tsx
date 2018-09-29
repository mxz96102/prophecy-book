import * as React from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames';
import ViewStore from "../../store/ViewStore";
import { Icon } from 'react-fa';

const Toolbar = inject('store')(observer(({ store, store: { selectedSeg } }) =>
  <div className="toolbar">
    <span className={classnames("tool", { disabled: true })}>
      <Icon name="save" /> 保存
          </span>
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
  </div>
))

export default Toolbar;