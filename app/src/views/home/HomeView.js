import React from 'react';
import './home-view.scss';

import imgHoneyMassage from './img/honey-massage.png';
import imgCupTherapy from './img/cup-therapy.png';
import imgLeechTherapy from './img/leech-therapy.png';
import imgOldEstonianMassage from './img/old-estonian-massage.png';

export default function HomeView() {
	const services = [
		{
			title: 'Meemassaaš',
			description:
				`Paranda oma vereringet, leevenda liigesvalusid,
				vähenda stressi, ravi hingamisteede haigusi, ...`,
			link: '#',
			imageUrl: imgHoneyMassage,
		},
		{
			title: 'Kuputeraapia',
			description:
				`Leevenda närvi-, lihas- ja liigesvalusid, ravi sporditraumasid
				või erinevaid valusündroome, samuti unetust, halvatust, ...`,
			link: '#',
			imageUrl: imgCupTherapy,
		},
		{
			title: 'Kaaniteraapia',
			description:
				`Ravi südame- ja veresoondkonna haigusi ning
				vereringkonna häireid,, neuroloogilisi haigusi,
				mao- ja seedetrakti haigusi, ...`,
			link: '#',
			imageUrl: imgLeechTherapy,
		},
		{
			title: 'Vana-Eesti massaaš',
			description:
				`Ravi erineviad ttervisega seotud probleeme, lõõgasta oma keha
				ja vaimu, paranda enesetunnet, ...`,
			link: '#',
			imageUrl: imgOldEstonianMassage,
		},
	];

	const renderService = (title, description, link, imageUrl, index) => (
		<article className="media" key={index}>
			<a href={link} className="media-object-wrap">
				<img className="media-object" src={imageUrl} alt={title} />
			</a>
			<h1 className="h2 media-title">{title}</h1>
			<p>{description}</p>
			<a className="media-link" href={link}>Uuri lähemalt</a>
		</article>
	);

	return (
		<div className="view home-view">
			<h1>Meie teenused</h1>
			<div className="service-list">
				{services.map((service, index) => renderService(
					service.title,
					service.description,
					service.link,
					service.imageUrl,
					index
				))}
			</div>
		</div>
	);
}
