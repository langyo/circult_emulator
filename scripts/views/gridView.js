import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";
import shortid from "shortid";

import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

import { withStyles } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
          <Circle x={200} y={100} radius={50} fill="green" />
          <Line
            x={20}
            y={200}
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            stroke="black"
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
          />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));


export default withStyles(GridView);