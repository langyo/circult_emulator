import React from 'react';
import Reflux from "reflux";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: "100%",
        height: "100%",
        border: "solid blue"
    }
});

class Block extends Reflux.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <span>{123}</span>
            </div>
        );
    }
}

export default withStyles(styles)(Block);