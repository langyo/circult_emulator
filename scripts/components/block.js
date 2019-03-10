import React from 'react';
import Reflux from "reflux";
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        width: "100%",
        height: "100%",
        border: "1px solid grey"
    }
});

class Block extends Reflux.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                
            </div>
        );
    }
}

export default withStyles(styles)(Block);