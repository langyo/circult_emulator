import React from "react";
import Reflux from "reflux";
import { Stage, Layer, Line } from "react-konva";

import { Store, Actions } from '../store';

import Grid from "./grid";
import LineDrawer from "./lineDrawer";
import Components from "./components";

import PostSelector from "../canvaElements/postSelector";
import ComponentSelector from "../canvaElements/componentSelector";

class MainCanva extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}
        onMouseMove={(n) => n.target.pointerPos && Actions.mouseMove(n.target.pointerPos.x, n.target.pointerPos.y)}
        onClick={Actions.mouseClick}
      >
        <Layer>
          <Grid />
          <Components />
          <LineDrawer />
          <ComponentSelector x={1} y={1} type="move" />
          <ComponentSelector x={0} y={0} type="choosing" />
        </Layer>
      </Stage>
    );
  }
}

export default MainCanva;