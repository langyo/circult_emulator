import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class Power extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Line x={0} y={30} points={[0, 0, 25, 0]} strokeWidth="1.5" stroke="#000" />
                <Line x={35} y={30} points={[0, 0, 25, 0]} strokeWidth="1.5" stroke="#000" />
                <Line x={25} y={20} points={[0, 0, 0, 20]} strokeWidth="1.5" stroke="#000" />
                <Line x={35} y={10} points={[0, 0, 0, 40]} strokeWidth="1.5" stroke="#000" />
            </Group>
        )
    }
}

Power.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Power;