import React from 'react';
import Reflux from 'reflux';
import PropTypes from 'prop-types';

// 宏观动作，例如更改线路、元件的摆放位置等
let actions = Reflux.createActions([
    "makeLine",         // 创建连接线
    "makeCoomponent",   // 创建元件
    "updateComponent",  // 更新元件，例如改变固定 props 状态、移动元件
    "destoryLine",      // 销毁连接线
    "destoryComponent", // 销毁元件

    "mouseMove",        // 鼠标移动事件
    "mouseClick",       // 鼠标点击事件
    "mouseDoubleClick", // 鼠标双击事件
    "mouseRightClick",  // 鼠标右键点击事件
]);

// 电路本体存储，包括各元件位置及具体信息
class Circult extends Reflux.Store {
    constructor() {
        super();

        this.state = {
            components: [
                {
                    class: "system.power",
                    x: 5,
                    y: 4,
                    props: {
                        U: 6,
                        R: 0,
                        source: true    // 指定了此属性的元件会被作为电源看待，所有计算参数都先依赖于这个元件
                    },
                    state: {}
                },
                {
                    class: "system.light",
                    x: 7,
                    y: 4,
                    props: {
                        R: 12
                    }
                }
            ],
            wires: [
                {   
                    begin: {
                        x: 5,
                        y: 4
                    },
                    end: {
                        x: 7,
                        y: 4
                    },
                    through: [
                        {
                            x: 6,
                            y: 4
                        }
                    ],
                    state: {}
                }
            ],
            mouseState: {
                move: {
                    x: 0,
                    y: 0
                },
                click: {
                    x: 0,
                    y: 0
                },
                clickType: ""   // "single"|"double"|"right"
            },
            selector: {
                grid: {
                    x: 5,
                    y: 4
                },
                post: {
                    x: 0,
                    y: 0,
                    sX: 0,
                    sY: 0
                }
            }
        }

        this.listenToMany(actions);
    }

    makeLine(from, to, path) {

    }

    makeComponent(className) {

    }

    updateComponent(id, state) {

    }

    destoryLine(from, to, path) {

    }

    destoryComponent(id) {

    }

    mouseMove(pos){
        this.setState({
            mouseState: {
                move: pos
            }
        });
        console.log(this.state.mouseState.move);
    }

    mouseClick(e){
        this.setState({
            mouseState: {
                click: this.state.mouseState.move,
                clickType: "single"
            }
        });
    }

    mouseDoubleClick(e){
        console.log("doubleClick ", e);
    }

    mouseRightClick(e){
        console.log("rightClick ", e);
    }
}

export let Store = Reflux.initStore(Circult);
export let Actions = actions;