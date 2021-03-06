import React from "react";
import Reflux from "reflux";
import { Group, Line } from "react-konva";

import { Store, Actions } from '../store';

class Grid extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    let list = [];
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line key={"a" + i} x={i * 60 + 30} y={0} points={[0, 0, 0, 1000]} stroke="#bbb" />
      );
    }
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line key={"b" + i} x={0} y={i * 60 + 30} points={[0, 0, 1000, 0]} stroke="#bbb" />
      );
    }

    return (
      <Group>
        {list}
      </Group>
    );
  }
}

export default Grid;