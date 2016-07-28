import React from 'react';
import './home-view.scss';

import { Link } from 'react-router';

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
			link: '/teenused/meemassaas',
			imageUrl: imgHoneyMassage,
		},
		{
			title: 'Kuputeraapia',
			description:
				`Leevenda närvi-, lihas- ja liigesvalusid, ravi sporditraumasid
				või erinevaid valusündroome, samuti unetust, halvatust, ...`,
			link: '/teenused/kuputeraapia',
			imageUrl: imgCupTherapy,
		},
		{
			title: 'Kaaniteraapia',
			description:
				`Ravi südame- ja veresoondkonna haigusi ning
				vereringkonna häireid,, neuroloogilisi haigusi,
				mao- ja seedetrakti haigusi, ...`,
			link: '/teenused/kaaniteraapia',
			imageUrl: imgLeechTherapy,
		},
		{
			title: 'Vana-Eesti massaaš',
			description:
				`Ravi erineviad ttervisega seotud probleeme, lõõgasta oma keha
				ja vaimu, paranda enesetunnet, ...`,
			link: '/teenused/vana-eesti-massaas',
			imageUrl: imgOldEstonianMassage,
		},
	];

	const renderService = (title, description, link, imageUrl, index) => (
		<article className="media" key={index}>
			<Link to={link} className="media-object-wrap">
				<img className="media-object" src={imageUrl} alt={title} />
			</Link>
			<h1 className="h2 media-title">{title}</h1>
			<p>{description}</p>
			<Link to={link} className="media-link">Uuri lähemalt</Link>
		</article>
	);

	return (
		<div className="view home-view">
			<h1>Minu teenused</h1>
			<div className="service-list">
				{services.map((service, index) => renderService(
					service.title,
					service.description,
					service.link,
					service.imageUrl,
					index
				))}
			</div>

			<article className="about">
				<h1>Minust lähemalt</h1>
				<p>
					Tere! Minu nimi on Eliina Pind. Olen erialalt nii medõde kui ka ämmaemand. Hariduse omandasin Tartu
					Tervishoiu kõrgkoolis ning hiljem ka aastaid sellel erialal tegutsenud. Hilisemalt olen ka
					erinevatelt koolitustelt juurde õppinud massaži ning vanarahva uskumusi. Minu soov on tutvustada
					ravimeetodeid, mis aitavad inimestel enda kehas jälle hea tunda.
				</p>
			</article>
		</div>
	);
}
