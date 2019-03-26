import React from "react";
import Reflux from "reflux";
import { Stage, Layer, Line } from "react-konva";

import { Store, Actions } from '../store';

import Grid from "./grid";
import LineDrawer from "./lineDrawer";
import Components from "./components";
import PostSelector from "../canvaElements/postSelector";

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
          <LineDrawer />
          <PostSelector x={1} y={1} selectorX={10} selectorY={10} type="unchosen"/>
          <PostSelector x={2} y={1} selectorX={10} selectorY={10} type="choosing"/>
          <PostSelector x={3} y={1} selectorX={10} selectorY={10} type="chosen"/>
        </Layer>
      </Stage>
    );
  }
}

export default MainCanva;