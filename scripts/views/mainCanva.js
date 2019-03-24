import React from "react";
import Reflux from "reflux";
import { Stage, Layer } from "react-konva";

import { Store, Actions } from '../store';

import Grid from "./grid";
import LineDrawer from "./lineDrawer";
import Components from "./components";

class MainCanva extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Grid />
          <Components />
        </Layer>
      </Stage>
    );
  }
}

export default MainCanva;