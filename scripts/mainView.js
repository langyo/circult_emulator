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


class MainWindow extends React.Component {
    static defaultProps = {
        color: '#66ccff',
        theme: 'light'
    };

    render() {
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
                
            </Window>
        );
    }
}

export default MainWindow;