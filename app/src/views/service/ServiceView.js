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
					<p className="stats">
						Hind: <strong>{service.price}</strong><br />
						Kestvus: <strong>{service.duration}</strong><br />
						<strong><a href="#broneeri" className="cta">Broneeri aeg</a></strong>
					</p>
				</div>

				{service.content}
			</div>

			<div className="page-sidebar">
				<div id="broneeri" className="booking-form">
					<h2 className="sidebar-title">Broneeri aeg</h2>
					<p>
						<span className="title">Telefon:</span>
						5563 3544
					</p>
					<p>
						<span className="title">{service.locations.length > 1 ? 'Asukohad' : 'Asukoht'}:</span>
						{service.locations.join(', ')}
					</p>
					<p>
						<span className="title">Tasumine:</span>
						Maksta saab kohapeal sularahas või ettemaksuarvega:
					</p>
					<p>
						Saaja: OÜ Väekas<br />
						Konto nr: EE00123456789<br />
						Selgitus: {service.title}
					</p>
				</div>
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
