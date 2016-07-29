/* eslint-disable max-len */

import React from 'react';

import imgHoneyMassage from './img/honey-massage.png';
import imgCupTherapy from './img/cup-therapy.png';
import imgLeechTherapy from './img/leech-therapy.png';
import imgOldEstonianMassage from './img/old-estonian-massage.png';

export const services = {
	'meemassaas': {
		title: 'Meemassaaž',
		price: '25€',
		duration: '60 minutit',
		coverImageSmall: imgHoneyMassage,
		coverImageMedium: imgHoneyMassage,
		locations: [
			'Paides Pärnu tn 75',
		],
		summary:
			'Paranda oma vereringet, leevenda liigesvalusid, vähenda stressi, ravi hingamisteede haigusi, ...',
		content: (
			<div className="service-content">
				<p>Mee kasulikus toimes ei kahtle ilmselt mitte keegi, aga siin mõned põhjused, miks mee kasutamine massaažis on efektiivne ja hea:</p>
				<ul>
					<li>Mesi imendub massaaži käigus osaliselt naha kaudu organismi, teisalt omab välispidiselt mitmeid kasulikke toimeid.</li>
					<li>Mee koostis on vereplasmaga väga sarnane, seetõttu omandab organism selle seespidiselt täielikult, ei teki jääkaineid.</li>
					<li>Mesi on hügroskoopne, see tähendab, et tal on omadus võtta kõik lõhnad ja maitsed endasse ning imada aineid ehk ta tõmbab endasse jääkaineid inimese naha pinnalt ja puhastab poore. See on ka põhjus, miks öeldakse, et tilk tõrva meepotis rikub selle sisu jäädavalt.</li>
					<li>Homöopaatiline toime – mesi kannab endas paljude taimede DNA-d ja mesilaste poolt meesse lisatud fermente jms, mis terapeutilistes doosides on organismile kasulikud.</li>
					<li>Meemassaaži võib kombineerida kuputeraapiaga ja ravimtaimedega. Kupud aitavad meel paremini imenduda ja mõned ravimtaimed otse nahale pannes ei avalda piisavalt tugevat mõju kui meega koos.</li>
				</ul>

				<p>OÜ Väekas poolt pakutud meemassaaži tehakse kliendi poolt valitud kehapiirkonnale.</p>

				<h2 className="h3">Massaaži toime:</h2>
				<ul>
					<li>Kiirendab vere- ja lümfiringet</li>
					<li>Parandab naha omadusi ja tundlikkust, vähendab nn apelsinikoore nahka ja paksendeid</li>
					<li>Mõningane haigustekitajate vastane toime (köha, ülemiste hingamisteede haigused algstaadiumis)</li>
					<li>Radikuliidieelsed seisundid</li>
					<li>Normaliseerib siseelundite tööd</li>
					<li>Vähendab peavaluhoogusid, sh migreeni</li>
					<li>Leevendab kroonilisi liigespõletikke</li>
					<li>Osteporoosi puhul ja selle ennetamiseks</li>
					<li>Üleüldine väsimus (mitte kurnatus), stress ja depressioon</li>
					<li>Parandab üldiselt immuunsüsteemi ja energeetikat</li>
					<li>Reguleerib soolestiku tööd</li>
					<li>Leevendab sõltuvustest tingitud kaebusi</li>
				</ul>

				<h2 className="h3">Näidustused:</h2>
				<ul>
					<li>Vereringe ja lümfiringe häired, tursed</li>
					<li>Naha vananenud ilme, lõtvunud nahk (ka sünnituse järgselt), naha paksendid</li>
					<li>Erinevad kopsuhaigused: levinuim on köha, bronhiidi ja kopsupõletiku järgselt</li>
					<li>Radikuliidieelne seisund</li>
					<li>Seedehäired, kõhukinnisus</li>
					<li>Ülekaal</li>
					<li>Immuunsüsteemi nõrkus</li>
					<li>Osteoporoos</li>
					<li>Peavalud, migreen</li>
					<li>Liigespõletikud</li>
					<li>Stress, depressioon, väsimus</li>
				</ul>

				<h2 className="h3">Vastunäidustused:</h2>
				<ul>
					<li>Meeallergia või ülitundlikkus muudele mesindussaadustele</li>
					<li>Väga valutundlik inimene ja väga karvane nahk</li>
					<li>Ägedalt kulgevad haigused ja põletikulised protsessid (sh mädanikud), palavik</li>
					<li>Verejooks või veritsemine, veritsemise oht (verevedeldajate kasutamine)</li>
					<li>Nahahaigused ja haavad (sh värsked tätoveeringud ja augustamised)</li>
					<li>Veenilaiendid ja –põletikud (lokaalselt pole hea)</li>
					<li>Kõrge vererõhk, mis on ravimata. Ka liiga madal vererõhk.</li>
					<li>Psüühikahäired</li>
					<li>Rasked organpuudulikkused: südame, maksa, neerude, pankrease</li>
					<li>Südamerikked</li>
					<li>Kasvajad/vähk</li>
					<li>Suured sünnimärgid (lokaalselt ei saa teha)</li>
					<li>Kilpnäärme haigused, mis on ravimata</li>
					<li>Rasedus, lapseiga.</li>
					<li>Diabeet – sõltub vormist ja kulust</li>
					<li>Alkoholi ja narkootikumide kasutamine</li>
					<li>Kurnatus, šokiseisund</li>
					<li>Peale operatsioone (6 kuud kuni aasta, suurematest operatsioonidest isegi kauem)</li>

				</ul>

				<h2 className="h3">Mida vältida: </h2>
				<ul>
					<li>Tugevalt söömist</li>
					<li>Samal päeval ei tohiks süüa ja juua kohvi, kanget teed, tugevaid vürtse, äädikaga konserveeritud toite, šokolaadi, palju suhkrut sisaldavaid toite ja jooke, sh alkoholi ja narkootikume.</li>
					<li>Enne massaaži ei tohiks kreemitada, kasutada deodorante, duššigeele, ihupiima jms, mis võivad vähendada meemassaaži mõju otse naha pinnale. Vajadusel pesta/loputada lihtsalt puhta veega.</li>
					<li>Saunatamist, tugevat sportimist ja ujumist vahetult enne massaaži: keha vedelikutasakaal häirub.</li>
				</ul>

				<h2 className="h3">Pärast massaaži:</h2>
				<ul>
					<li>Tuleks keha hoida soojas, sest see on väga vastuvõtlik külmale jms välistele ärritustele;</li>
					<li>Juua päeva jooksul piisavalt, vähemalt 1,5-2 liitrit leiget vett või taimeteed;</li>
					<li>Piisavalt puhata - magada (kui on väsimus), samas mõned inimesed saavad meemassaažilt just palju energiat, aga kuna seda on raske ennustada, kuidas kellelegi massaaž mõjub, siis peale seda mitte planeerida olulisi käike ja sündmusi-üritusi, kui peaks siiski suurt väsimust esinema.</li>
					<li>Liikuda värskes õhus;</li>
					<li>Kui kehv enesetunne ei möödu paari päeva jooksul, siis võtta sütt või muud absorbeerivat ainet, et aidata kehal ringlema läinud jääkaineid kokku koguda ja organismist väljutada;</li>
					<li>Kui on soov pesta ja saunatada, siis mõõdukalt (liiga kuum ei ole hea, on lisakoormus organismile);</li>
					<li>Vältida lisakoormust organismile: sh treeningud, massaaži jms.</li>
				</ul>
			</div>
		),
	},
	'kuputeraapia': {
		title: 'Kuputeraapia',
		price: '25€',
		duration: '60 minutit',
		locations: [
			'Paides Pärnu tn 75',
			'Roosna-Alliku vallamaja',
			'Kilplaste Koda Müüsleris',
			'Albu küladetuba Kaalepis',
		],
		summary: 'Leevenda närvi-, lihas- ja liigesvalusid, ravi sporditraumasid või erinevaid valusündroome, samuti unetust, halvatust, ...',
		coverImageSmall: imgCupTherapy,
		coverImageMedium: imgCupTherapy,
		content: (
			<div className="service-content">
				<p>Kuputeraapiat iseloomustav info</p>
			</div>
		),
	},
	'kaaniteraapia': {
		title: 'Kaaniteraapia',
		price: '5€/kaan + töötasu 15€',
		duration: '60-90 minutit',
		summary: 'Ravi südame- ja veresoondkonna haigusi ning vereringkonna häireid, neuroloogilisi haigusi, mao- ja seedetrakti haigusi, ...',
		coverImageSmall: imgLeechTherapy,
		coverImageMedium: imgLeechTherapy,
		locations: [
			'Paides Pärnu tn 75',
			'Roosna-Alliku vallamaja',
			'Kilplaste Koda Müüsleris',
			'Albu küladetuba Kaalepis',
		],
		content: (
			<div className="service-content">
				<p>Kaaniteraapiat iseloomustav info</p>
			</div>
		),
	},
	'vana-eesti-massaas': {
		title: 'Vana-Eesti massaaž',
		price: '25€',
		duration: '90 minutit',
		summary: 'Ravi erineviad tervisega seotud probleeme, lõõgasta oma keha ja vaimu, paranda enesetunnet, ...',
		coverImageSmall: imgOldEstonianMassage,
		coverImageMedium: imgOldEstonianMassage,
		locations: [
			'Paides Pärnu tn 75',
			'Roosna-Alliku vallamaja',
			'Kilplaste Koda Müüsleris',
			'Albu küladetuba Kaalepis',
		],
		content: (
			<div className="service-content">
				<p>Vana-Eesti massaaži iseloomustav info</p>
			</div>
		),
	},
};

export const pages = {
	tutvustus: {
		title: 'Tutvusus',
		summary: 'Minu nimi on Eliina, kuid mind teatakse ka Liinuna. Olen hariduselt ämmaemand. Reaalselt olen töötanud aastaid rohkem medõena, nii Eestis kui Soomes. Töökogemust meditsiini alal on kokku seitse aastat ...',
		content: (
			<div className="page-content">
				<p>Minu nimi on Eliina, kuid mind teatakse ka Liinuna. Olen hariduselt ämmaemand. Reaalselt olen töötanud aastaid rohkem medõena, nii Eestis kui Soomes. Töökogemust meditsiini alal on kokku seitse aastat. Huvi aga pärimusmeditsiini vastu on mul olnud juba pikka aega ja tahtmine haigla keskkonnast välja pääseda näris hinge, seega võtsingi vastu otsuse, et ei istu enam käed rüpes ning lähen end selles valdkonnas täiendama. Oma uutest oskustest lähtuvalt 2015. aasta märtsi kuu alguses sündis OÜ Väekas, mille alt olen aktiivselt pakkunud vana-eesti massaaži ning pakutavaid teenuseid on ajapikku lisandunud ja lisandub veelgi. Soov inimesi aidata ja neile head teha on minus alati olemas olnud, seetõttu ka sellised erialavalikud ja tegutsemine</p>
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
