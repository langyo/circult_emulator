import React from 'react';
import PropTypes from 'prop-types';
import { Line, Group } from 'react-konva';

class Light extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                <Line x={0} y={0} points={[0, 0, 40, 40]} strokeWidth="1.5" stroke="#000" />
            </Group>
        )
    }
}

Light.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number
}

export default Light;