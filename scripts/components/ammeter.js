import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line, Group } from 'react-konva';

class Ammeter extends React.Component {
    render() {
        return (
            <Group>
                <Circle radius={30} x={30} y={29} strokeWidth={1.5} stroke="#000" fill="#fff" />
                <Text text="A" fontFamily="Helvetica, Arial, sans-serif" fontSize="24" y={38.382816} x={22.007813} />
            </Group>
        )
    }
}

export default Ammeter;