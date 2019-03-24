import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import Ammeter from "../svgs/ammeter";
import FixedResistance from "../svgs/fixedResistance";
import Light from "../svgs/light";
import Power from "../svgs/power";
import SlidingRheostat from "../svgs/slidingRheostat";
import Switch from "../svgs/switch";
import Voltmeter from "../svgs/voltmeter";

const componentList = [
    {
        icon: <Ammeter />,
        text: "电流表",
        class: "system.ammeter"
    },
    {
        icon: <FixedResistance />,
        text: "定值电阻",
        class: "system.fixedResistance"
    },
    {
        icon: <Light />,
        text: "灯泡",
        class: "system.light"
    },
    {
        icon: <Power />,
        text: "电源",
        class: "system.power"
    },
    {
        icon: <SlidingRheostat />,
        text: "滑动变阻器",
        class: "system.slidingRheostat"
    },
    {
        icon: <Switch />,
        text: "开关",
        class: "system.switch"
    },
    {
        icon: <Voltmeter />,
        text: "电压表",
        class: "system.voltmeter"
    }
]

class ChooseComponentDialog extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Dialog
                onClose={this.props.onClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
            >
                <DialogTitle id="customized-dialog-title" onClose={this.onClose}>
                    {"选择想向图纸添加的电路元件……"}
                </DialogTitle>
                <DialogContent>
                    <MenuList>
                        {
                            componentList.map((n, index) => (
                                <MenuItem key={index}>
                                    <ListItemIcon>
                                        {n.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {n.text}
                                    </ListItemText>
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        关闭
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

ChooseComponentDialog.propTypes = {
    open: PropTypes.bool,
    onChooseComponent: PropTypes.func,
    onClose: PropTypes.func
}

export default ChooseComponentDialog;