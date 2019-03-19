import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";
import shortid from "shortid";

import RGL, { WidthProvider } from "react-grid-layout";

import { withStyles } from "@material-ui/core/styles";

const GridLayout = WidthProvider(RGL);

const styles = theme => ({
  layout: {

  },
  text:{
    border: "5px solid blue"
  }
});

class GridView extends Reflux.Component {
  state = {
    layout: (()=> {
      let n = [];
      for (let i = 0; i < 12; ++i) {
        for (let j = 0; j < 12; ++j) {
          n.push({
            x: j,
            y: i,
            w: 1,
            h: 1,
            i: (i * 12 + j).toString(),
            id: shortid.generate()
          });
        }
      }
      return n;
    })
  }

  onLayoutChange = () => {

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridLayout
          className="layout"
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={true}
          margin={[0, 0]}
          cols={12}
          rowHeight={30}
          width={360}
        >
          {this.state.layout.map( n => {
            return (
              <div key={n.id}>
                <span className={classes.text}>
                  {n.i}
                </span>
              </div>
            );
          })}
        </GridLayout>
      </div>
    );
  }
}

export default withStyles(GridView);