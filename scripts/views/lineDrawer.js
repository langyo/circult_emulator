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
        {this.state.wires.map(m => m.through.map(n => {
          return (<Wire key={shortid.generate()} x={n.x} y={n.y} begin="left" end="right"/>);
        })).reduce((prev, curr) => prev.concat(curr))}
      </Group>
    );
  }
}

export default Grid;