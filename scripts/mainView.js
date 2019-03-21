import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortid from "shortid";

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

import Grid from "./views/grid";

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
    menuButton: {
        position: 'absolute',
        top: theme.spacing.unit * 2,
        left: theme.spacing.unit * 2,
        zIndex: 9000
    },
    menu: {
        zIndex: 10000
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
        zIndex: 9000
    },
    map: {
        override: "hidden",
        height: "100%",
        width: "100%"
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
            <MuiThemeProvider theme={theme}>
                {/* 悬浮按钮部分 */}
                <Menu
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleCloseMenu}
                    className={classes.menu}
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
                <IconButton className={classes.menuButton} onClick={this.handleOpenMenu}>
                    <MenuIcon />
                </IconButton>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
                {/* 底部电路方格 */}
                <div className={classes.map}>
                    <Grid />
                </div>
            </MuiThemeProvider>
        );
    }
}

MainWindow.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainWindow);