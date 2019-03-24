import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class Voltmeter extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Circle radius={28} x={30} y={30} strokeWidth={1.5} stroke="#000" fill="#fff" />
                <Text text="V" fontFamily="Helvetica, Arial, sans-serif" fontSize="20" y={20} x={23} />
            </Group>
        )
    }
}

Voltmeter.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Voltmeter;