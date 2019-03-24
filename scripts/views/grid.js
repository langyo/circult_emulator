import React from "react";
import { Stage, Layer, Line } from "react-konva";

import Element from "./element";

import Ammeter from "../components/ammeter";
import FixedResistance from "../components/fixedResistance";
import Light from "../components/light";
import Power from "../components/power";
import SlidingRheostat from "../components/slidingRheostat";
import SwitchOff from "../components/switchOff";
import SwitchOn from "../components/switchOn";
import Voltmeter from "../components/voltmeter";

class Grid extends React.Component {
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
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {list}
          <Ammeter x={1} y={4} />
          <FixedResistance x={2} y={4} />
          <Light x={3} y={4} />
          <Power x={4} y={4} />
          <SlidingRheostat x={1} y={5} />
          <SwitchOff x={2} y={5} />
          <SwitchOn x={3} y={5} />
          <Voltmeter x={4} y={5} />
        </Layer>
      </Stage>
    );
  }
}

export default Grid;