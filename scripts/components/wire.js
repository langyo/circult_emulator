import React from 'react';
import PropTypes from 'prop-types';
import { Line, Group } from 'react-konva';

class Light extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                { this.props.begin == "left" && (<Line x={0} y={30} points={[0, 0, 30, 0]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.begin == "right" && (<Line x={30} y={30} points={[0, 0, 30, 0]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.begin == "top" && (<Line x={30} y={0} points={[0, 0, 0, 30]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.begin == "bottom" && (<Line x={30} y={30} points={[0, 0, 0, 30]} strokeWidth="1.5" stroke="#000" />) }

                { this.props.end == "left" && (<Line x={0} y={30} points={[0, 0, 30, 0]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.end == "right" && (<Line x={30} y={30} points={[0, 0, 30, 0]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.end == "top" && (<Line x={30} y={0} points={[0, 0, 0, 30]} strokeWidth="1.5" stroke="#000" />) }
                { this.props.end == "bottom" && (<Line x={30} y={30} points={[0, 0, 0, 30]} strokeWidth="1.5" stroke="#000" />) }
            </Group>
        )
    }
}

Light.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    // begin 与 end 均只有以下的值：
    // "left"|"right"|"top"|"bottom"
    begin: PropTypes.string,
    end: PropTypes.string
}

export default Light;