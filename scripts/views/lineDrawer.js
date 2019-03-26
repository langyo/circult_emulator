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
          let parse = (l, n, r) => {
            if(l.y < n.y && r.x < n.x) return ["top", "left"];
            if(r.y < n.y && l.x < n.x) return ["left", "top"];
            if(l.y < n.y && n.x < r.x) return ["top", "right"];
            if(r.y < n.y && n.x < l.x) return ["right", "top"];
            if(l.x < n.x && n.y < r.y) return ["left", "bottom"];
            if(r.x < n.x && n.y < l.y) return ["bottom", "left"];
            if(n.x < l.x && n.y < r.y) return ["right", "bottom"];
            if(n.x < r.x && n.y < l.y) return ["bottom", "right"];
            if(l.x < n.x && n.x < r.x && l.y == n.y && n.y == r.y) return ["left", "right"];
            if(r.x < n.x && n.x < l.x && l.y == n.y && n.y == r.y) return ["right", "left"];
            if(l.y < n.y && n.y < r.y && l.x == n.x && n.x == r.x) return ["top", "bottom"];
            if(r.y < n.y && n.y < l.y && l.x == n.x && n.x == r.x) return ["bottom", "top"];
          }
          // 检查是否只有一点点空隙
          if(m.through.length == 1){
            list.push(parse(m.begin, m.through[0], m.end));
          }else{
            // 先处理开头 begin 与 through 的第一个元素的方向判定
            list.push(parse(m.begin, m.through[0], m.through[1]));
            // 中间各线
            for(let i = 1; i < m.through.length - 1; ++i) list.push(parse(m.through[i - 1], m.through[i], m.through[i + 1]));
            // 最后处理 through 最后一个元素与末尾 end 处的方向判定
            list.push(parse(m.through[m.through.length - 2], m.through[m.through.length - 1], m.end));
          }

          // 渲染
          return m.through.map((n, index) => {
            return (<Wire key={shortid.generate()} x={n.x} y={n.y} begin={list[index][0]} end={list[index][1]} />);
          })
        }).reduce((prev, curr) => prev.concat(curr))}
      </Group>
    );
  }
}

export default Grid;