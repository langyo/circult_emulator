import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class SwitchOff extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Line x={0} y={30} points={[0, 0, 10, 0]} strokeWidth="1.5" stroke="#000" />
                <Line x={50} y={30} points={[0, 0, 10, 0]} strokeWidth="1.5" stroke="#000" />
                <Circle x={13} y={30} radius={3} strokeWidth={1.5} stroke="#000" fill="#fff" />
                <Line x={15} y={29} points={[0, 0, 35, 0]} strokeWidth="1.5" stroke="#000" />
            </Group>
        )
    }
}

SwitchOff.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default SwitchOff;