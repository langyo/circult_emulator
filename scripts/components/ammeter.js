import React from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class Ammeter extends React.Component {
    render() {
        return (
            <Group x={30 * this.props.x} y={30 * this.props.y}>
                <Circle radius={28} x={30} y={30} strokeWidth={1.5} stroke="#000" fill="#fff" />
                <Text text="A" fontFamily="Helvetica, Arial, sans-serif" fontSize="24" y={17} x={22} />
            </Group>
        )
    }
}

Ammeter.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Ammeter;