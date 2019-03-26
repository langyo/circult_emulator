import React from "react";
import Reflux from "reflux";
import { Group } from "react-konva";

import { Store, Actions } from '../store';

import PostSelector from "../canvaElements/postSelector";
import ComponentSelector from "../canvaElements/componentSelector";

class MainCanva extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <Group>
          {/* {this.state.mouseState.move && (<ComponentSelector
            x={(this.state.mouseState.move.x - 30) / 60}
            y={(this.state.mouseState.move.y - 30) / 60}
            type="move" 
          />)} */}
          <ComponentSelector
            x={this.state.selector.grid.x}
            y={this.state.selector.grid.y}
            type="choosing"
          />
      </Group>
    );
  }
}

export default MainCanva;