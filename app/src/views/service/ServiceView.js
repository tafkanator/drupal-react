import React, { PropTypes } from 'react';
import './service-view.scss';

import Image from '../../components/Image';

import { services } from '../../../config/data';

const ServiceView = (props) => {
	const service = services[props.route.path] || {};

	return (
		<div className="view service-view">
			<div className="page-content">

				<div className="page-header">
					{service.coverImageMedium ? (
						<Image className="cover-image" src={service.coverImageMedium} alt={service.title} />
					) : null}
					<h1 className="title">{service.title}</h1>
				</div>

				{service.content}
			</div>
		</div>
	);
};

ServiceView.propTypes = {
	route: PropTypes.shape({
		path: PropTypes.string.isRequired,
	}).isRequired,
};

export default ServiceView;
