import React, { PropTypes } from 'react';

const Image = ({ alt, ...props }) => (
	<img alt={alt} {...props} />
);

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
};

export default Image;
