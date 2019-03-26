import React from "react";
import Reflux from "reflux";
import { Stage, Layer, Line, Text} from "react-konva";

import { Store, Actions } from '../store';

import Grid from "./grid";
import LineDrawer from "./lineDrawer";
import Components from "./components";
import Controller from "../canvaElements/controller";

import ComponentSelector from "../canvaElements/componentSelector";

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
          {/* {this.state.mouseState.move && (<Text x={30} y={400} text={this.state.mouseState.move.x + ", " + this.state.mouseState.move.y} />)}
          {this.state.mouseState.click && (<Text x={30} y={420} text={this.state.mouseState.click.x + ", " + this.state.mouseState.click.y} />)} */}
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