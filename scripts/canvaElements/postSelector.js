import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Line, Group } from 'react-konva';

const colors = {
    "unchosen": "#66ccff",
    "choosing": "#ee0000",
    "chosen": "#ffa500"
}

class PostSelector extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30 + this.props.selectorX} y={60 * this.props.y + 30 + this.props.selectorY}>
                {
                    [-3, 3].map(x => 
                        [-3, 3].map(y => (
                            <Group key={shortid.generate()}>
                                <Line x={x} y={y} points={[0, 0, x, 0]} stroke={colors[this.props.type]} />
                                <Line x={x} y={y} points={[0, 0, 0, y]} stroke={colors[this.props.type]} />
                            </Group>
                        ))
                    ).reduce((prev, next) => prev.concat(next))
                }
            </Group>
        )
    }
}

PostSelector.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    selectorX: PropTypes.number,
    selectorY: PropTypes.number,
    type: PropTypes.string
}

export default PostSelector;