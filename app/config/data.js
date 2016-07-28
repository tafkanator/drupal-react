/* eslint-disable max-len */

import React from 'react';

import imgHoneyMassage from './img/honey-massage.png';
import imgCupTherapy from './img/cup-therapy.png';
import imgLeechTherapy from './img/leech-therapy.png';
import imgOldEstonianMassage from './img/old-estonian-massage.png';

export const services = {
	'meemassaas': {
		title: 'Meemassaaš',
		price: '25€',
		duration: '90 minutit',
		coverImageSmall: imgHoneyMassage,
		summary:
			'Paranda oma vereringet, leevenda liigesvalusid, vähenda stressi, ravi hingamisteede haigusi, ...',
		content: (
			<div className="service-content">
				<p>Meemassaaši iseloomustav info</p>
			</div>
		),
	},
	'kuputeraapia': {
		title: 'Kuputeraapia',
		price: '25€',
		duration: '90 minutit',
		summary: 'Leevenda närvi-, lihas- ja liigesvalusid, ravi sporditraumasid või erinevaid valusündroome, samuti unetust, halvatust, ...',
		coverImageSmall: imgCupTherapy,
		content: (
			<div className="service-content">
				<p>Kuputeraapiat iseloomustav info</p>
			</div>
		),
	},
	'kaaniteraapia': {
		title: 'Kaaniteraapia',
		price: '25€',
		duration: '90 minutit',
		summary: 'Ravi südame- ja veresoondkonna haigusi ning vereringkonna häireid,, neuroloogilisi haigusi, mao- ja seedetrakti haigusi, ...',
		coverImageSmall: imgLeechTherapy,
		content: (
			<div className="service-content">
				<p>Kaaniteraapiat iseloomustav info</p>
			</div>
		),
	},
	'vana-eesti-massaas': {
		title: 'Vana-Eesti massaaš',
		price: '25€',
		duration: '90 minutit',
		summary: 'Ravi erineviad tervisega seotud probleeme, lõõgasta oma keha ja vaimu, paranda enesetunnet, ...',
		coverImageSmall: imgOldEstonianMassage,
		content: (
			<div className="service-content">
				<p>Vana-Eesti massaaši iseloomustav info</p>
			</div>
		),
	},
};

export const pages = {
	tutvustus: {
		title: 'Tutvusus',
		summary: 'Tere! Minu nimi on Eliina Pind. Olen erialalt nii medõde kui ka ämmaemand. Hariduse omandasin Tartu Tervishoiu kõrgkoolis ning hiljem ka aastaid sellel erialal tegutsenud...',
		content: (
			<div className="page-content">
				Tutvustuse lehe sisu
			</div>
		),
	},
	kontakt: {
		title: 'Kontakt',
		content: (
			<div className="page-content">
				Kontaktlehe sisu
			</div>
		),
	},
};
