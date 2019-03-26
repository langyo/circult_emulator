import React from "react";
import Reflux from "reflux";
import { Stage, Layer, Line } from "react-konva";

import { Store, Actions } from '../store';

import Grid from "./grid";
import LineDrawer from "./lineDrawer";
import Components from "./components";
import Controller from "../canvaElements/controller";

class MainCanva extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}
        onMouseMove={(n) => Actions.mouseMove(n.target.pointerPos)}
        onClick={Actions.mouseClick}
      >
        <Layer>
          <Grid />
          <Components />
          <LineDrawer />
          <Controller />
        </Layer>
      </Stage>
    );
  }
}

export default MainCanva;