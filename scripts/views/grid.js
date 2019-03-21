import React from "react";
import { Stage, Layer, Line } from "react-konva";

class Grid extends React.Component {
  render() {
    let list = [];
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line x={i * 100 + 30} y={0} points={[0, 0, 0, 10000]} stroke="black" />
      );
    }
    for (let i = -50; i < 50; ++i) {
      list.push(
        <Line x={0} y={i * 100 + 30} points={[0, 0, 10000, 0]} stroke="black" />
      );
    }

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>{list}</Layer>
      </Stage>
    );
  }
}

export default Grid;