import React, { PropTypes } from 'react';
import './service-view.scss';

import { services } from '../../../config/data';

const ServiceView = (props) => {
	const service = services[props.route.path] || {};

	return (
		<div className="view service-view">
			<h1>{service.title}</h1>

			{service.content}
		</div>
	);
};

ServiceView.propTypes = {
	route: PropTypes.shape({
		path: PropTypes.string.isRequired,
	}).isRequired,
};

export default ServiceView;
