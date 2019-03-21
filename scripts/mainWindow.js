const electron = window.require('electron');
const { ipcRenderer, shell } = electron;
const remote = electron.remote;

import React from "react";

import { Window, TitleBar } from 'react-desktop/macOs';

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
            >
                <TitleBar
                    title="Circult Emulator"
                    controls
                    style="-webkit-app-region: drag"
                    onCloseClick={() => remote.process.exit()}
                />
                <webview
                    src="./public/index.core.html"
                    style={{display:"inline-flex", width:"774px", height:"574px"}}
                />
            </Window>
        );
    }
}

export default MainWindow;