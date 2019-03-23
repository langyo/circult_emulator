import React from "react";
import { Stage, Layer, Line } from "react-konva";

import Element from "./element";

import Ammeter from "../components/ammeter";

class Grid extends React.Component {
  render() {
    let list = [];
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line key={"a" + i} x={i * 60 + 30} y={0} points={[0, 0, 0, 1000]} stroke="black" />
      );
    }
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line key={"b" + i} x={0} y={i * 60 + 30} points={[0, 0, 1000, 0]} stroke="black" />
      );
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {list}
          <Ammeter />
        </Layer>
      </Stage>
    );
  }
}

export default Grid;