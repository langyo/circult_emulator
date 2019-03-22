import React from 'react';
import Reflux from 'reflux';
import PropTypes from 'prop-types';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

class Element extends Reflux.Component {
  render() {
    return (
        <Image image={useImage(this.props.src)} />
    );
  }
}

Element.propTypes = {
    src: PropTypes.string
}

export default Element;