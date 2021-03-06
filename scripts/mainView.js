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
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from 'mdi-material-ui/plus';
import MenuIcon from 'mdi-material-ui/menu';

import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { Store, Actions } from './store';

import MainCanva from "./views/mainCanva";
import ChooseComponentDialog from "./dialogs/chooseComponent";
import AboutDialog from "./dialogs/about";

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

class MainWindow extends Reflux.Component {
    constructor(props){
        super(props);

        this.state = {
            anchorEl: null,
    
            choosingComponent: null,
            choosingComponentText: "",
    
            dialogAbout: false,
            dialogChooseComponent: false
        }

        this.store = Store;
    }

    handleOpenMenu = event => this.setState({ anchorEl: event.currentTarget });
    handleMenuItemClick = (event, index) => this.setState({ anchorEl: null });
    handleCloseMenu = () => this.setState({ anchorEl: null });

    handleDialogAboutOpen = () => this.setState({ dialogAbout: true, anchorEl: null });
    handleDialogAboutClose = () => this.setState({ dialogAbout: false, anchorEl: null });

    handleDialogChooseComponentOpen = () => this.setState({ dialogChooseComponent: true , choosingComponent: null});
    handleDialogChooseComponentClose = () => this.setState({ dialogChooseComponent: false });
    handleDialogChooseComponentGet = (choosing, text) => this.setState({
        dialogChooseComponent: false,
        choosingComponent: choosing,
        choosingComponentText: text
    });

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
                    <MenuItem>
                        {"实验环境设置"}
                    </MenuItem>
                    <MenuItem>
                        {"软件设置"}
                    </MenuItem>
                    <MenuItem>
                        {"导入..."}
                    </MenuItem>
                    <MenuItem>
                        {"导出..."}
                    </MenuItem>
                    <MenuItem>
                        {"更换材质"}
                    </MenuItem>
                    <MenuItem onClick={this.handleDialogAboutOpen}>
                        {"关于"}
                    </MenuItem>
                </Menu>
                <IconButton className={classes.menuButton} onClick={this.handleOpenMenu}>
                    <MenuIcon />
                </IconButton>
                <Tooltip
                    open={this.state.choosingComponent != null}
                    title={this.state.choosingComponentText}
                    placement="left"
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                >
                    <Fab color="primary" className={classes.fab} onClick={this.handleDialogChooseComponentOpen}>
                        <AddIcon />
                    </Fab>
                </Tooltip>
                {/* 底部电路方格 */}
                <div className={classes.map}>
                    <MainCanva />
                    <ChooseComponentDialog
                        open={this.state.dialogChooseComponent}
                        onClose={this.handleDialogChooseComponentClose}
                        onChooseComponent={this.handleDialogChooseComponentGet}
                    />
                    <AboutDialog open={this.state.dialogAbout} onClose={this.handleDialogAboutClose} />
                </div>
            </MuiThemeProvider>
        );
    }
}

MainWindow.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainWindow);