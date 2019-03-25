import React from 'react';
import Reflux from 'reflux';
import PropTypes from 'prop-types';

// 宏观动作，例如更改线路、元件的摆放位置等
let actions = Reflux.createActions([
    "makeLine",         // 创建连接线
    "makeCoomponent",   // 创建元件
    "updateComponent",  // 更新元件，例如改变固定 props 状态、移动元件
    "destoryLine",      // 销毁连接线
    "destoryComponent"  // 销毁元件
]);

// 电路本体存储，包括各元件位置及具体信息
class Circult extends Reflux.Store {
    constructor() {
        super();

        this.state = {
            components: [
                {
                    class: "system.power",
                    x: 0,
                    y: 0,
                    props: {
                        U: 6,
                        R: 0,
                        source: true    // 指定了此属性的元件会被作为电源看待，所有计算参数都先依赖于这个元件
                    },
                    state: {}
                },
                {
                    class: "system.light",
                    x: 3,
                    y: 0,
                    props: {
                        R: 12
                    }
                }
            ],
            wires: [
                {   
                    begin: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 3,
                        y: 0
                    },
                    through: [
                        
                        {
                            x: 1,
                            y: 0
                        },
                        {
                            x: 2,
                            y: 0
                        },
                    ],
                    state: {}
                }
            ]
        }

        this.listenToMany(actions);
    }

    makeLine(from, to) {

    }

    makeComponent(className) {

    }

    updateComponent(x, y, object) {

    }

    destoryLine(from, to) {

    }

    destoryComponent(x, y) {

    }
}

export let Store = Reflux.initStore(Circult);
export let Actions = actions;