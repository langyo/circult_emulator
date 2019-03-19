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

import { Window, TitleBar } from 'react-desktop/macOs';
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

import Block from './views/gridView';

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
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2
    },
    map: {
        override: "hidden",
        margin: "16px",
        height: "584px",
        width: "784px"
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
            >
                <TitleBar
                    title="Circult Emulator"
                    controls
                    style="-webkit-app-region: drag;"
                    onCloseClick={() => remote.process.exit()}
                />
                <MuiThemeProvider theme={theme}>
                    {/* 悬浮按钮部分 */}
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
                    {/* 底部电路方格 */}
                    <div className={classes.map}>
                        <GridLayout cols={8} rowHeight={95} width={754} margin={[0, 0]}>
                            <div key="1" data-grid={{ x: 3, y: 3, w: 1, h: 1 }}>
                                <Block />
                            </div>
                            <div key="2" data-grid={{ x: 5, y: 3, w: 1, h: 1 }}>
                                <Block />
                            </div>
                            <div key="3" data-grid={{ x: 8, y: 3, w: 1, h: 1 }}>
                                <Block />
                            </div>
                        </GridLayout>
                    </div>
                </MuiThemeProvider>
            </Window>
        );
    }
}

MainWindow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWindow);