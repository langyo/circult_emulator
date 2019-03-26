import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Line, Group } from 'react-konva';

const colors = {
    "move": "#39c5bb",
    "choosing": "#66ccff"
}

class ComponentSelector extends React.Component {
    render() {
        return (
            <Group x={60 * this.props.x + 30} y={60 * this.props.y + 30}>
                {
                    [
                        {x: 0, y: 0, w: 15, h: 15},
                        {x: 60, y: 0, w: -15, h: 15},
                        {x: 60, y: 60, w: -15, h: -15},
                        {x: 0, y: 60, w: 15, h: -15}
                    ].map(n => (<Group x={n.x} y={n.y}  key={shortid.generate()}>
                        <Line x={0} y={0} points={[0, 0, n.w, 0]} stroke={colors[this.props.type]} />
                        <Line x={0} y={0} points={[0, 0, 0, n.h]} stroke={colors[this.props.type]} />
                    </Group>))
                }
            </Group>
        )
    }
}

ComponentSelector.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    type: PropTypes.string
}

export default ComponentSelector;