import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class FixedResistance extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Rect stroke="#000" height={10} width={50} x={5} y={25} strokeWidth="1.5" fill="#fff"/>
                <Line x={0} y={30} points={[0, 0, 5, 0]} strokeWidth="1.5" stroke="#000"/>
                <Line x={55} y={30} points={[0, 0, 5, 0]} strokeWidth="1.5" stroke="#000"/>
            </Group>
        )
    }
}

FixedResistance.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default FixedResistance;