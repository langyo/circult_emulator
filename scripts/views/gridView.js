import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";

import { Responsive, WidthProvider } from "react-grid-layout";

import { withStyles } from "@material-ui/core/styles";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = theme => ({

});

class GridLayout extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      layouts: { lg: props.initialLayout }
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return this.state.layouts.lg.map( (l, i) => {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              S{i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  }

  onBreakpointChange = breakpoint => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    this.setState({ compactType });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
  };

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          measureBeforeMount={false}
          useCSSTransforms={true}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
          margin={[0, 0]}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

GridLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

GridLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function() {},
  cols: { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 },
  initialLayout: generateLayout()
};

function generateLayout() {
  let n = [];
  for (let i = 0; i < 12; ++i) {
    for (let j = 0; j < 12; ++j) {
      n.push({
        x: j,
        y: i,
        w: 1,
        h: 1,
        i: (i * 12 + j).toString(),
        static: true
      });
    }
  }
  return n;
}

export default withStyles(GridLayout);