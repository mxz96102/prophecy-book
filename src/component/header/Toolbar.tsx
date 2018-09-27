import * as React from 'react';
import {observer} from 'mobx-react'
import {Icon} from 'react-fa';

@observer
class Toolbar extends React.Component {
    render() {
      const { store } = this.props;

      return (
        <div className="toolbar">
          <span className="tool" disabled>
            <Icon name="save"/> 保存
          </span>
          <span className="tool" onClick={() => store.newSeg('TEXT', {}, "双击修改markdown文本")}>
            <Icon name="plus-square"/> 文本块
          </span>
          <span className="tool" onClick={() => store.newSeg("CODE", {}, "")}>
            <Icon name="plus-square"/> 代码块
          </span>
          <span className="tool" onClick={() => store.deleteSelectSeg()}>
            <Icon name="minus-square"/> 删除块
          </span>
          <span className="tool" disabled={store.selectedSeg.type !== "CODE"} onClick={() => store.runNowCode()}>
            <Icon name="play"/> 运行Code
          </span>
        </div>
      )
    }
}

export default Toolbar;