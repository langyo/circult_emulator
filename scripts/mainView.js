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

import { Window, TitleBar } from 'react-desktop/windows';
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';

import AddIcon from 'mdi-material-ui/plus';
import MenuIcon from 'mdi-material-ui/menu';

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import GridLayout from 'react-grid-layout';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: blue,
        error: red
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = theme => ({
    menu: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        left: theme.spacing.unit * 2,
        zIndex: 9999
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    }
});

const options = [
    "实验环境设置",
    "软件设置",
    "导入...",
    "导出...",
    "更换材质",
    "关于"
];

class MainWindow extends Reflux.Component {
    static defaultProps = {
        color: '#66ccff',
        theme: 'light'
    };

    state = {
        anchorEl: null
    }

    handleOpenMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuItemClick = (event, index) => {
        this.setState({ anchorEl: null });
    };

    handleCloseMenu = () => {
        this.setState({ anchorEl: null });
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
                    controls
                    style="-webkit-app-region: drag"
                    onCloseClick={() => remote.process.exit()}
                />
                <MuiThemeProvider theme={theme}>
                    <Menu
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleCloseMenu}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={index}
                                onClick={event => this.handleMenuItemClick(event, index)}
                            >
                                <Typography variant="button">{option}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <IconButton className={classes.menu} onClick={this.handleOpenMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Fab color="primary" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                    <GridLayout cols={12} rowHeight={30} width={800}>
                        <div key="a" data-grid={{ x: 2, y: 3, w: 1, h: 2 }}>
                            <Paper elevation={1} style={{ width: "100%", height: "100%", "z-index": 100}}>
                                <Typography>{1}</Typography>
                            </Paper>
                        </div>
                        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }}>
                            <Paper elevation={1} style={{ width: "100%", height: "100%", "z-index": 100}}>
                                <Typography>{1}</Typography>
                            </Paper>
                        </div>
                        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
                            <Paper elevation={1} style={{ width: "100%", height: "100%", "z-index": 100}}>
                                <Typography>{1}</Typography>
                            </Paper>
                        </div>
                    </GridLayout>
                </MuiThemeProvider>
            </Window>
        );
    }
}

MainWindow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);