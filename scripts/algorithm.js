import { Actions } from "./store";

export default (components, wires) => {
    // 生成森林
    let forest = [];

    for(let n of components){
        let hasPushed = false;
        for(let tree of forest){
            for(let leave of tree){
                for(let linking of leave.in.concat(leave.out)){
                    if(n.id == linking){
                        // 判断出 n 与此子叶有连接，将 n 加入此树
                        tree.push(n);
                        hasPushed = true;
                        break;
                    }
                    if(hasPushed) break;
                }
                if(hasPushed) break;
            }
        }
        if(!hasPushed){
            // 没有任何树能够容纳，所以在森林里新建一棵树
            forest.push([n]);
        }
    }

    // 检测电路环
    // 每个子叶必须至少连接上了两个节点，另外，开关必须特殊对待
    let forestState = [];
    for(let tree of forest){
        this.isTorus = true;    // 是否为环
        for(let leave of tree){
            // TODO: switch component 有个 state 名为 isOpen
            if(leave.in.length + leave.out.length < 2 || leave.state.isOpen && leave.state.isOpen == false){
                isTorus = false;
                break;
            }
        }
        if(!isTorus){
            // 如果不是环，说明这是个不连通的线路，将其中的所有元件的 state 的电气量重置
            for(let leave of tree) Actions.onUpdateState(leave.id, {I: 0, U: 0});
            forestState.push(false);
        }
        else forestState.push(true);
    }

    // 过滤掉不是环的部分
    let tempForest = []
    for(let i = 0; i < forestState.length; ++i){
        if(forestState[i]) tempForest.push(forest[i]);
    }
    forest = tempForest;

    // 生成串并联结构
    // 两节点入队，三节点递归
    const nodeCount = (n) => n.in.length + n.out.length;
    const visit = (nodes, id) => {
        for(let n of nodes){
            if(n.id == id) return n;
        }
    };
    let DFS = (nodes) => {
        let ret = {
            type: "series", // 串连为 "series"，并连为 "parallel",
            list: []
        }
        for(let n of nodes){
            if(nodeCount(n) == 2){
                // 为串连电路的一部分，加入列表
                ret.list.push(n);
            }else{
                // 说明要建立新的并连电路，解析每个 out 端口
                let list = [];
                for(let id of n.out){
                    list.push(DFS(components[id]))
                }
            }
        }
    }
    let circults = forest.map(n => DFS(n));
}