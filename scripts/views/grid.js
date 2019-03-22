import React from "react";
import { Stage, Layer, Line } from "react-konva";

import Element from "./element";

class Grid extends React.Component {
  render() {
    let list = [];
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line x={i * 60 + 30} y={0} points={[0, 0, 0, 1000]} stroke="black" />
      );
    }
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line x={0} y={i * 60 + 30} points={[0, 0, 1000, 0]} stroke="black" />
      );
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {list}
          {/* <Element src="../svgs/light.svg" /> */}
        </Layer>
      </Stage>
    );
  }
}

export default Grid;