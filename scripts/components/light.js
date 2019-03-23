import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class Light extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Circle radius={28} x={30} y={30} strokeWidth={1.5} stroke="#000" fill="#fff" />
                <Line x={10} y={10} points={[0, 0, 40, 40]} strokeWidth="1.5" stroke="#000" />
                <Line x={50} y={10} points={[0, 0, -40, 40]} strokeWidth="1.5" stroke="#000" />
            </Group>
        )
    }
}

Light.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Light;