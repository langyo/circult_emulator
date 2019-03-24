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
    // TODO: 读取 Store 进行画线

    return (
      <Group>
        {list}
      </Group>
    );
  }
}

export default Grid;