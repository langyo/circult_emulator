import React from "react";
import Reflux from "reflux";
import { Group } from "react-konva";

import { Store, Actions } from '../store';

import Ammeter from "../components/ammeter";
import FixedResistance from "../components/fixedResistance";
import Light from "../components/light";
import Power from "../components/power";
import SlidingRheostat from "../components/slidingRheostat";
import SwitchOff from "../components/switchOff";
import SwitchOn from "../components/switchOn";
import Voltmeter from "../components/voltmeter";

const componentMap = {
  "system.ammeter": (x, y) => <Ammeter x={x} y={y}/>,
  "system.fixedResistance": (x, y) => <FixedResistance x={x} y={y}/>,
  "system.light": (x, y) => <Light x={x} y={y}/>,
  "system.power": (x, y) => <Power x={x} y={y}/>,
  "system.slidingRheostat": (x, y) => <SlidingRheostat x={x} y={y}/>,
  "system.switch": (x, y) => <SwitchOn x={x} y={y}/>,
  "system.voltmeter": (x, y) => <Voltmeter x={x} y={y}/>
}

class Components extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Group>
        {this.state.components.map((n, index) => (
          <Group key={index}>
            {componentMap[n.class](n.x, n.y)}
          </Group>
        ))}
      </Group>
    );
  }
}

export default Components;