import React from 'react';
import Reflux from 'reflux';
import PropTypes, { number } from 'prop-types';
import shortid from 'shortid';

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
                    id: shortid.generate(),
                    x: 5,
                    y: 4,
                    props: {
                        U: 6,
                        R: 0,
                        source: true    // 指定了此属性的元件会被作为电源看待，所有计算参数都先依赖于这个元件
                    },
                    state: {},
                    in: [],
                    out: []
                },
                {
                    class: "system.light",
                    id: shortid.generate(),
                    x: 7,
                    y: 4,
                    props: {
                        R: 12
                    },
                    state: {},
                    in: [],
                    out: []
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
            lineDrawingState: {
                hasDrawing: false,
                path: [ /* {x: num, y: num} */]
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

        this.state.components[0].in.push(this.state.components[1].id);
        this.state.components[0].out.push(this.state.components[1].id);
        this.state.components[1].in.push(this.state.components[0].id);
        this.state.components[1].out.push(this.state.components[0].id);

        this.listenToMany(actions);
    }

    makeLine(from, to, path) {

    }

    makeComponent(className) {

    }

    updateComponent(id, state) {
        let components = this.state.components;
        for(let n of components){
            if(n.id == id){
                for(let i of Object.keys(state)){
                    n.state[i] = state[i];
                }
                break;
            }
        }
        console.log("更新了状态", this.state.components);
    }

    destoryLine(from, to, path) {

    }

    destoryComponent(id) {

    }

    mouseMove(pos) {
        // if (this.state.lineDrawingState.hasDrawing) {
        //     let path = this.state.lineDrawingState.path;
        //     console.log(path)

        //     if (path.length > 0) {
        //         // 检查 path，与当前鼠标坐标进行比对，保证不会重复绘制
        //         let latest = path[path.length - 1];
        //         latest.x = latest.x * 60 + 30;
        //         latest.y = latest.y * 60 + 30;
        //         if (latest.x < pos.x && pos.x < (latest.x + 60) && latest.y < pos.y && pos.y < (latest.y + 60)) return;
        //         // 如果鼠标移动了 path 中倒数第二个方格，则绘制路径会回退一格
        //         let latest2 = path[path.length - 2];
        //         latest2.x = latest.x * 60 + 30;
        //         latest2.y = latest.y * 60 + 30;
        //         if (latest2.x < pos.x && pos.x < (latest2.x + 60) && latest2.y < pos.y && pos.y < (latest2.y + 60)) path.pop();
        //         // 其余的情况就是多移动了一格了，将此格子的坐标记录进 path
        //         else path.push({ x: (pos.x - 30) / 60, y: (pos.y - 30) / 60 });
        //     }else{
        //         // 没有任何记录的情况，直接记录
        //         path.push({ x: (pos.x - 30) / 60, y: (pos.y - 30) / 60 });
        //     }
            
        //     this.setState({
        //         mouseState: {
        //             move: pos
        //         },
        //         lineDrawingState: {
        //             path: path
        //         }
        //     })
        // }
        // else this.setState({
        //     mouseState: {
        //         move: pos
        //     },
        //     lineDrawingState: {
        //         path: []
        //     }
        // });
        this.setState({
            mouseState: {
                move: pos
            }
        });
    }

    mouseClick(e) {
        console.log(this.state);
        this.setState({
            mouseState: {
                click: this.state.mouseState.move,
                clickType: "single"
            },
            // lineDrawingState: {
            //     hasDrawing: !this.state.lineDrawingState.hasDrawing,
            //     path: []
            // }
        });
    }

    mouseDoubleClick(e) {
        console.log("doubleClick ", e);
    }

    mouseRightClick(e) {
        console.log("rightClick ", e);
    }
}

export let Store = Reflux.initStore(Circult);
export let Actions = actions;