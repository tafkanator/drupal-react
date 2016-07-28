import React from 'react';
import './home-view.scss';

import { Link } from 'react-router';

import { services, pages } from '../../../config/data';

const HomeView = () => {
	const getFormattedServiceList = () => Object.keys(services).map(serviceKey => {
		const service = services[serviceKey];

		return {
			title: service.title,
			description: service.summary,
			link: `/teenused/${serviceKey}`,
			imageSrc: service.coverImageSmall,
			key: serviceKey,
		};
	});

	const aboutInfo = pages.tutvustus;

	return (
		<div className="view home-view">
			<h1>Minu teenused</h1>
			<div className="service-list">
				{getFormattedServiceList().map((service) => (
					<article className="media" key={service.key}>
						<Link to={service.link} className="media-object-wrap">
							<img className="media-object" src={service.imageSrc} alt={service.title} />
						</Link>
						<h1 className="h2 media-title">{service.title}</h1>
						<p>{service.description}</p>
						<Link to={service.link} className="media-link">Uuri lähemalt</Link>
					</article>
				))}
			</div>

			<article className="about">
				<h1>Minust lähemalt</h1>
				<p>{aboutInfo.summary}</p>
				<p>
					<Link to="/tutvustus">Loe kogu tutvustust</Link>
				</p>
			</article>
		</div>
	);
};

export default HomeView;
