import React from 'react';
import './service-view.scss';

const ServiceView = () => {
	const services = {
		meemassaas: {
			title: 'Meemassaaš',
		},
	};

	const service = services.meemassaas;

	return (
		<div className="view service-view">
			<h1>{service.title}</h1>
		</div>
	);
};

export default ServiceView;
