import React from "react";
import Reflux from "reflux";
import shortid from "shortid";
import { Group } from "react-konva";

import { Store, Actions } from '../store';

import Wire from '../components/wire';

class Grid extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Group>
        {this.state.wires.map(m => {
          /* 生成连线方向列表 */
          let list = [];
          let parseTurn = (a, b) => {
            if(a.y == b.y){
              // 两者在同一平面
              if(a.x > b.x){
                // a 在 b 右边
                return ["left", "right"]
              }
              // TODO
            }
          }
          // 先处理开头 begin 与 through 的第一个元素的方向判定
          
          

          m.through.map((n, index) => {
            return (<Wire key={shortid.generate()} x={n.x} y={n.y} begin="left" end="right" />);
          })
        }).reduce((prev, curr) => prev.concat(curr))}
      </Group>
    );
  }
}

export default Grid;