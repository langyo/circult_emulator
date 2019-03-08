const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const { ipcRenderer, shell } = electron;
const remote = electron.remote;

import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";

import { Window, TitleBar, Text } from 'react-desktop/windows';
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from 'mdi-material-ui/plus';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
});

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    }
});

class MainWindow extends React.Component {
    static defaultProps = {
        color: '#66ccff',
        theme: 'light'
    };

    render() {
        const { classes } = this.props;

        return (
            <Window
                color={this.props.color}
                theme={this.props.theme}
                chrome
                height="600px"
                width="800px"
                padding="8px"
            >
                <TitleBar
                    title="Circult Emulator"
                    controls style="-webkit-app-region: drag"
                    onCloseClick={() => remote.process.exit()}
                />
                <MuiThemeProvider theme={theme}>
                    <Fab color="primary" aria-label="Add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </MuiThemeProvider>
            </Window>
        );
    }
}

MainWindow.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainWindow);