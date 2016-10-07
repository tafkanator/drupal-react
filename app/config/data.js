/* eslint-disable max-len */

import React from 'react';

import imgHoneyMassage from './img/honey-massage.png';
import imgCupTherapy from './img/cup-therapy.png';
import imgLeechTherapy from './img/leech-therapy.png';
import imgConsult from './img/consult.jpg';
import imgOldEstonianMassage from './img/old-estonian-massage.png';

import imgAboutMe from './img/about-me.jpg';

export const services = {
	'vana-eesti-massaas': {
		title: 'Vana-Eesti massaaž',
		canBook: true,
		visibleInHomePage: true,
		priceList: [{
			title: 'Vana-Eesti massaaž',
			price: '25€',
			duration: '90 minutit',
		}],
		summary: 'Aitab lõõgastada keha sundasenditest, lihaspingetest, stressi ning toetab muude tervisehädade korral, ...',
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
				<h2 className="h3">Mis on vana-eesti massaaž?</h2>
				<p>Vana-Eesti massaaži teatakse ka soonetasumise nime all. Soonetasumise võtteid on edasi kantud enamasti suuliselt, sest Eestis levis kirjakeel üpriski hilja. Igas peres tehti massaaži omal ajal natuke erinevalt. Selle massaaži puhul on tegemist teraapiaga, milles on ühendatud meie esivanemate vanad tarkused ja tänapäeva teadmised. Soonetasumisel mõjutatakse põhiliselt erinevaid lihasgruppe, liigeseid, siseorganeid, vere- ja lümfiringet, närvisüsteemi ning nahka. Lühidalt öeldes, tegemist on kogu keha massaažiga, mida tehakse pealaest jalatallani ning mõlemalt poolt. Massaaž ei ole ainult mingi tegevus, see on keha stimuleerimine, et anda tagasi või hoida tasakaalu ja väge. See on meie esivanemate ürgne tarkus teha teistele head.</p>

				<h2 className="h3">Mille poolest erineb vana-eesti massaaž klassikalisest rootsi massaažist?</h2>
				<p>Klassikalist rootsi massaaži tehakse massaažilaual ning ainukeseks rõivaks on kliendil seljas enamasti aluspüksid. Vana-eesti massaaži tehakse aga põrandal matil või madratsil läbi sobivate riiete, ning piirkondades, kuhu massaaži parasjagu ei tehta, on soojendamas tekike või rätik. Erinevalt klassikalisest massaažist saab massaaži tegija kasutada enda keharaskust ning peale oma labakäte ka muid kehaosi nagu randmeid, küünarvarsi, küünarnukke, põlvi või jalgu. Klassikalise massaaži pakkujad teevad tihti pooletunniseid kuni tunniseid seansse vaid mõnele kehaosale, vana-eesti massaažis aga lähenetakse organismile kui tervikule, massaaž hõlmab kogu keha pealaest jalatallani ning nii kõhu kui selja poolt.</p>

				<h2 className="h3">Ettevalmistus massaaži tulekul:</h2>
				<p>Sobivaks riietuseks masseeritaval on õhukesed, näiteks spordirõivad, mis pole soovitavalt liiga karedad ega libedad. Naisterahvad võivad kasutada pluusi all sportlikku rinnahoidjat või üldse mitte midagi. Hea on, kui massaaži ajaks oleksid kõik ehted ära võetud. Süüa võiks hiljemalt tund enne massaaži, et selili ja kõhuli survet avaldades ebamugavustunnet vältida. Hea on käia ka enne WC-s ära (loomulikult vajadusel võib seda kasutada ka vahepeal), sest massaaži tehes viiakse inimene sümpaatilisest olekust parasümpaatilisse, et lõdvestus oleks maksimaalne: tuleks välistada ka kõikvõimalikud segavad faktorid (üleliigsed inimesed, kes võivad lärmi teha või kõnetada, telefonid tuleks hääletuks panna jms). Enne massaaži tegemist vesteldakse ning selgitatakse välja, miks abi otsitakse ning kas on vastunäidustusi. Probleemsele piirkonnale saab vajadusel rohkem tähelepanu pöörata. Selleks soovitan esimesel korral 10-15 minutit varem kohale tulla, et see massaaži tegemise aega minimaalselt mõjutaks.</p>

				<h2 className="h3">Vana-eesti massaaž - kellele ja miks? Kas on vastunäidustusi?</h2>
				<p>Vana-Eesti massaaž on mõeldud eelkõige täiskasvanule, aga rasedatele, beebidele ja lastele pole see ehk kõige sobivam, neile on omad massaažid. Enamasti on inimesel massaaži pöördumisel mingi näidustus või ootus - kas tervisega seotud probleem või lihtsalt soov lõõgastuda.</p>

				<h2 className="h3">Vana-eesti massaaž - kellele ja miks? Kas on vastunäidustusi?</h2>
				<p>Vana-Eesti massaaž on mõeldud eelkõige täiskasvanutele, ei soovitata lastele ja rasedatele. Enamasti on inimesel massaaži pöördumisel mingi näidustus või ootus - kas tervisega seotud probleem või lihtsalt soov lõõgastuda.</p>

				<h2 className="h3">Mille puhul aitab?</h2>
				<ul>
					<li>aeglane vere- ja lümfiringe, verevarustushäired</li>
					<li>kergelt ärrituv närvisüsteem, stress, unehäired</li>
					<li>lihaspinged, lihaste valulikkus, liigesliikuvuse vähenemine</li>
					<li>raskendatud hingamine</li>
					<li>kerge vererõhu tõus</li>
					<li>vedelike ja jääkainete kogunemine organismi</li>
					<li>aeglustunud soolte peristaltika</li>
					<li>pingepeavalu</li>
					<li>naha väsinud ilme, kortsude tekkimine ja naha kuivus</li>
					<li>immuunsüsteemi nõrkus (v.a HIV ja AIDS)</li>
					<li>väsinud kehahoiak, rühivead</li>
					<li>vaimne tasakaalutus, väsimus vaimsest tööst</li>
					<li>enesetunde langus</li>
				</ul>

				<h2 className="h3">Millal vältida?</h2>
				<ul>
					<li>ägedad südamehäired</li>
					<li>liiga kõrge, madal või ebastabiilne vererõhk</li>
					<li>traumad, lahtised haavad</li>
					<li>ägedad põletikulised protsessid (palavikuga kulgevad)</li>
					<li>ägedad nahahaigused</li>
					<li>nakkushaigused (sh tuberkuloos, hepatiit)</li>
					<li>ägedad organite puudulikkused</li>
					<li>komplitseeritud veenilaiendid (ei saa teha lokaalselt)</li>
					<li>vähk ja kasvajad</li>
					<li>suured sünnimärgid (ei saa teha lokaalselt)</li>
					<li>suurenenud trombioht (gangreen, infarkt jms)</li>
					<li>kilpnäärmehaigused (ravimata)</li>
					<li>alkoholi- ja narkojoove</li>
					<li>raseduse ajal</li>
				</ul>

				<p>Kui inimesele on tehtud operatsioon, peaks olema massaaži tegemise ajaks möödunud vähemalt kuus kuud.</p>
			</div>
		),
	},
	'meemassaas': {
		title: 'Meemassaaž',
		canBook: true,
		visibleInHomePage: true,
		priceList: [{
			title: 'Meemassaaž',
			duration: '60 minutit',
			price: '25€',
		}],

		coverImageSmall: imgHoneyMassage,
		coverImageMedium: imgHoneyMassage,
		locations: [
			'Paides Pärnu tn 75',
		],
		summary:
			'Parandab vereringet, leevendab liigesvalusid, vähendab stressi, ravib hingamisteede haigusi, ...',
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
					<li>Osteoporoosi puhul ja selle ennetamiseks</li>
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

				<h2>Ettevalmistus massaažiks</h2>
				<h2 className="h3">Mida vältida:</h2>
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
		title: 'Kuputeraapia ja -massaaž',
		canBook: true,
		visibleInHomePage: true,
		menuTitle: 'Kuputeraapia',
		priceList: [{
			title: 'Kuputeraapia',
			duration: '30 minutit',
			price: '10€',
		}, {
			title: 'Kupumassaaž',
			duration: '60 minutit',
			price: '20€',
		}],
		locations: [
			'Paides Pärnu tn 75 (kuputeraapia ja -massaaž)',
			'Roosna-Alliku vallamaja (ainult kuputeraapia)',
			'Kilplaste Koda Müüsleris (ainult kuputeraapia)',
			'Albu küladetuba Kaalepis (ainult kuputeraapia)',
		],
		summary: 'Leevendab närvi-, lihas- ja liigesvalusid, ravib sporditraumasid või erinevaid valusündroome, samuti unetust, parandab naha toonust, ...',
		coverImageSmall: imgCupTherapy,
		coverImageMedium: imgCupTherapy,
		content: (
			<div className="service-content">
				<h2 className="h3">Kupud</h2>
				<p>Kupupanekut ja verikuppu on rahvameditsiinis kasutatud tuhandeid aastaid. Eestis kasutati vanadel aegadel kuppude panekul sarvi, sest see oli kõige käepärasem vahend. Soome keeles näiteks kupupanek otsetõlkes tähendabki sarvede panekut. Traditsiooniliselt eristatakse „kuiva“ ja „märga“ kuppu ehk esimene tähendab kuputeraapiat alarõhu meetodil, märja kupu all mõistetakse aga verikuppu, ehk nö „must“ seisev veri lastakse välja ning kupp aitab sel organismist paremini erituda. „Kuiva“ kuputeraapiat saab jagada veel kolmeks, ehk istekupp, välkkupp ja kupumassaaž. Esimese puhul jäetakse kupud vastavalt probleemsele piirkonnale 10-20-minutiks seisma, massaaži puhul kombineeritakse kuppude panekut tavaliselt õli-, mee- või ravimtaimemassaažiga ja liigutatakse kuppe keha erinevatel piirkondadel. „Välkkupu“ puhul asetatakse kupp paigale ja tõmmatakse kohe seejärel ära ning korratakse vajadusel tegevust. Kuputeraapiat tehti varem ka haiglates, aga praeguseks hetkeks on see suuresti unustuste hõlma vajunud. Kuputeraapiat võib teha ka lastele, aga massaaži kuppudega ainult täiskasvanutele.</p>
				<p>Kupupanekul jäävad kehale enamasti verevalumid, need paranevad nagu rahvakeeli „sinikad“ ikka. Mõned terapeudid on seisukohal, et mida tugevam „sinikas“ kuhugi jääb, seda kehvem verevarustus ja just sellesse kohta kuputeraapiat tegema peakski. Kupumassaaži järgselt võivad hematoomid tekkida, aga ei pruugi, see sõltub taas konkreetse inimese vereringest, sidekoest ja naha tüübist.</p>
				<p>Nagu eelnevalt mainitud, siis vanasti kasutati kuppude panekuks sarvi, aga ka savianumaid, bambust ja klaasi – sõltuvalt materjali kättesaadavusest. Nende paigale asetamiseks oli enamasti vajalik tulega või soolega alarõhu tekitamine. Tänapäevasemateks vahenditeks on aga veel kummi-, silikoon- ja plastmasskupud.</p>
				<p>Kupumassaaži tehakse naha kaudu lihastele, liigestele ja punktmassaažina. Liigutused peavad jälgima vere- ja lümfiringet. Kuppe ei ole hea panna kondisele piirkonnale, näiteks roietele, selgroole jms. Kupp tõmbab alarõhuga endasse nahka ja muid pehmeid kudesid. Kuputeraapiat võib kombineerida hiina meditsiinist tuntud akupunktide ja meridiaanidega, aga väga efektiivne on lähtuda ka abivajaja probleemsetest piirkondadest, mille kohta saab aimu vestluse ja kupupanekule eelneva massaaži teel. </p>
				<p>Miks kuputeraapia on tõhus? Kuputeraapia töötab paljuski keha isetervenemisvõime tõttu. Ärritades keha mingit piirkonda ning parandades selle verevarustust, hakkab organism sellele ise tähelepanu pöörama ning tervendama. Seetõttu on kuputeraapia tõhus paljude erinevate seisundite ja haiguste korral.</p>

				<h2 className="h3">Istekupu ja kupumassaaži toime: </h2>
				<ul>
					<li>Staaside kõrvaldamine (vereringe halvenenud), paraneb lümfi- ja vereringe ning seetõttu ka kudede ainevahetus (nn apelsinikoorenahk väheneb)</li>
					<li>Ajutine vererõhu tõus</li>
					<li>Pulss normaliseerub</li>
					<li>Biokeemilised positiivsed muutused</li>
					<li>Vähenevad tursed</li>
					<li>Väljutatakse jääkained</li>
					<li>Vähenevad lihaspinged ja spasmid</li>
					<li>Ainevahetus paraneb kogu organismis</li>
				</ul>

				<h2 className="h3">Näidustused:</h2>
				<ul>
					<li>Närvi-, lihas- ja liigesvalud, erinevad valusündroomid</li>
					<li>Kroonilised lihas- ja liigeshaigused</li>
					<li>Sporditraumad</li>
					<li>Erinevad valusündroomid (aga mitte ägedas faasis)</li>
					<li>Õlavöötme- ja seljavalud</li>
					<li>Astma, bronhiit, kopsupõletik ja muud kergemad hingamisteede- ning kopsudega seotud haigused (aga mitte ägedas faasis ega palavikuga)</li>
					<li>Seedimisprobleemid</li>
					<li>Unetus</li>
					<li>Reuma</li>
					<li>Depressioon</li>
					<li>Naha vananemine, tuhm jume, venitusarmid ja nn apelsinikoore nahk</li>
					<li>Tursed</li>
					<li>Nii meeste- kui naiste üleminekuea vaevused</li>
					<li>Halvatus (pareesid, pleegiad - vereringe parandamiseks, mitte halvatuse ravimiseks)</li>
					<li>Üleliigne kehakaal</li>
				</ul>

				<h2 className="h3">Vastunäidustused:</h2>
				<ul>
					<li>Haigused ja seisundid ägedas faasis, palaviku korral</li>
					<li>Rasked südame-veresoonkonna haigused, neeru- ja kopsuhaigused</li>
					<li>Pahaloomulised kasvajad/vähk või nende kahtlus</li>
					<li>Veenilaiendid ja -põletikud (lokaalselt ei saa kasutada)</li>
					<li>Vere hüübimishäired või verevedeldajate kasutamine</li>
					<li>Erinevad nahaprobleemid (nahahaigused: psoriaas, roos jms, allergiline lööve, nahapinnast kõrgemad sünnimärgid, naha terviklikkuse häired: põletused, haavandid jms – lokaalselt ei saa kasutada)</li>
					<li>Nakkushaigused (tuberkuloos jms)</li>
					<li>Psüühhilised haigused (skisofreenia, depressioon jms)</li>
					<li>Epilepsia (aktiivses haiguse faasis mitte panna)</li>
					<li>Kunstliigesed (nende peale ei panda)</li>
					<li>Alkoholi või narkootikumide tarvitamine enne protseduuri</li>
					<li>Rinnalapsed, imetavad emad</li>
					<li>Operatsioonist möödas vähem kui 1 kuu, suurtest op-dest vähem kui pool aastat kuni aasta</li>
					<li>Raseduse ajal mitte soovitav</li>
					<li>Menstruatsiooni ajal kõhu piirkonda mitte panna</li>
					<li>Lahtised haavad</li>
					<li>Kilpnäärme haiguste korral, kui pole ravitud</li>
				</ul>

				<p>Kuna kupupanek ja massaaž panevad kehas jääkained aktiivselt liikuma, on teraapia järgselt oluline palju puhast vett juua (normaalne igapäevane vedeliku kogus on 1,5-2 liitrit).</p>
			</div>
		),
	},
	'kaaniteraapia': {
		title: 'Kaaniteraapia',
		canBook: true,
		visibleInHomePage: true,
		priceList: [{
			title: 'Kaaniteraapia',
			price: '5€ kaan + töötasu 15€',
			duration: '60-90 minutit',
		}],
		summary: 'Toetab südame- ja veresoonkonna haigusi ning vereringe häireid, neuroloogilisi haigusi, mao- ja seedetrakti haigusi, ...',
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
				<h2 className="h3">Kaani- ehk hirudoteraapia</h2>
				<p>Kaaniteraapias kasutatakse apteegikaane ehk Hirudo Verbana liiki kaane. Palju on uurimustöid tehtud ka Hirudo Medicinalis’tega, aga need on paljudes riikides väljasuremise ohus ja seetõttu looduskaitse all. Kaaniteraapia on väga vana tervistamismeetod, mida on kasutatud aastatuhandeid. Andmeid selle kohta on leitud India Ayurveda meditsiinist Sanskriti käsikirjadest, Roomast, Egiptusest püramiidide seintelt, Hiina taoistlike kloostrite käsikirjadest, Nostradamus kirjeldas oma tekstides, Itaalias, Küprosel 13. sajandil peatati katkuepideemia tänu kaanidele jne. Maailmasõdade aegu, kui ravimeid veel sellisel kujul ja mahus saada ei olnud kui tänapäeval, kasutati kaane erineval pool palju: Venemaal, Inglismaal, Prantsusmaal, Ungaris, Saksamaal jne. Neid transporditi ka muudesse riikidesse sadate miljonite kaupa – see on üks põhjustest, miks H.Medicinalis’ed on väljasuremise ohus. Aga loomulikult on kaaniravi kasutatud juba kaua ka Eestis. Kahjuks on 19. ja 20. sajandil ravimitööstuse arenguga seoses kaaniteraapia paljuski unustuste hõlma vajunud. Paraku on ravimitel tihti kõrvaltoimed ja koostoimed teiste ravimitega, mida kaanidega sellisel kujul ei esine. Kaanide süljest tuntuim aine, hirudiin, on ainuke, millele on keemiliselt suudetud sarnane verd vedeldava toimega aine sünteesida, milleks on hepariin. Hepariinil võib esineda aga ebameeldivaid kõrvaltoimeid. Ühtlasi on kaanide teraapiline toime erinevate terviseprobleemide puhul palju laiem kui ravimitega, st seisundeid, mille puhul kaanidest abi võib saada on palju. Juba see on üks veenev argument miks kaaniteraapiaga alustada ja kui suuri tervisehädasid pole, siis käia ennetavalt 1-2 korda aastas enda organismi tasakaalustamas.</p>
				<p>Kaanidega on läbi viidud erinevaid laboratoorseid katseid. On avastatud, et kaanide süljel on omadus tappa näiteks järgnevaid haigustekitajaid: stafülokokk Aureus (selle surmamiseks kulub kaani süljel 3-10 päeva), Siberi katk (14-17p), tuberkuloos (28p), tüüfus (30p), paratüüfus-B (4 kuud).</p>
				<p>Kaanid on hermafrodiidid, st neil on mõlema sugupoole suguelundid. Nad paljunevad tavaliselt mitmekesi koos, üksteise külgi nö hõõrudes. Suguküpsed on kaanid 3-4 aastaselt, elada võivad nad aga loomulikes tingimustes kuni 7 aastaseks ja kauem. Tihti arvavad inimesed, et kaanid elavad ainult vees, aga tegelikult see nii ei ole. Ka oma munad munevad nad üldjuhul maismaale.  6-8 kuu vanuseid kaane võib juba ravi eesmärgil kasutada.</p>
				<p>Kaanid on üldiselt ühekordseks kasutamiseks ja kuuluvad peale kaaniteraapiat hävitamisele. Nad reageerivad lõhnale, puudutusele, vibratsioonile, valgusele, maitsele ja temperatuurile – seega on nad küllaltki tundlikud tegelased. Kaane Eesti loodusest korjata ei tohi, seetõttu tuleb neid hankida sertifitseeritud kasvatustest (Leedust, Venemaalt, Ukrainast jne). Kasvatuste pidamisel on aga ette nähtud palju eritingimusi ja see on kallis ettevõtmine, seetõttu Eestis kasvatusettevõtet ei ole.</p>

				<h2 className="h3">Mis see kaaniteraapia siis täpsemalt on?</h2>
				<ul>
					<li>Naha pinnale asetatakse erinevatesse kohtadesse kaanid, kes otsivad sobiva koha, kinnitades end saba küljes oleva iminapaga naha külge ja seejärel hammustades naha pinda lõhuvad selle terviklikkuse ning selle tulemusel aktiveerub immuunsüsteem. Kaane võib panna hiina meditsiini akupunktuuri punktidele ja meridiaanide järgi, anatoomiliselt organi peale vms – sellel on energeetiline toime lokaalselt ja tervetele organsüsteemidele. Kaan paigutatakse nahale enamasti korgikese sees, et ta päris vabalt ringi ei silkaks.</li>
					<li>Hammustamise tagajärjel toimub vere ja lümfivedeliku mehhaaniline eemaldamine, sõltuvalt kaani suurusest ja hammustamise kohast imeb kaan 5-20ml verd. Kehast vere eemaldamisel ja veresoonte seinu laiendades (selline toime on kaani süljes olevatel ainetel) langeb üldjuhul mõningal määral inimese vererõhk.</li>
					<li>Et verd paremini kätte saada, eritab kaan haavakesse oma sülge, millel on bioloogiline toime, st kaanide süljest on eraldatud sadu erinevaid ja kasulikke aineid, mis teraapia juures on olulised.</li>
					<li>Kui kaan on piisavalt verd imenud, muutub ta teatavasti raskemaks ning ühel hetkel laseb end haavakeselt ise lahti. Kui ei lase, siis üle tunni aja ei ole väga mõtet hoida, sellisel juhul tuleb kaaniga manipuleerida, et ta lahti laseks – tõmmata ei saa! Kaan reageerib ärritile hästi, võib kasutada seepi, desinfitseerimisvahendit, alkoholi vms.</li>
					<li>Kaani hammustuse kohale jääb kolmnurkne haav, mis võib veritseda kuni 48 tundi (esimestel kordadel ja lümfipaisu puhul veritseb pigem rohkem ja kauem, kui regulaarselt kaaniteraapias käijatel). Esmase haavaravi teeb kaaniterapeut ise ja seejärel annab juhised kodus haava eest hoolitsemiseks.</li>
					<li>Haavale tekivad ühe-kahe päeva jooksul tumedad koorikud ning haava ümbrusesse võivad tekkida juba kaani pealoleku ajal punetavad laigud, mis ajapikku kaovad. Kellel on kapillaaridega või nahaaluse koega probleeme, neil võivad tekkida ka verevalumid. Haavad võivad nagu putukahammustusedki sügeleda. Haavade kratsimist tuleks vältida, et veritsus ei algaks uuesti ja et haava ei satuks põletikutekitajaid – vajadusel tupsutada kange alkoholiga, määrida peale mõnd rahustavat salvi või eeterlikku õli, kasutada apteegis käsimüügis olevaid ravimeid (Loratin/Claritine/ Zyrtec jms allergianähtusid leevendavaid vahendeid või hüdrokortisoonsalvi). Koorikute asemele tekivad hiljem armid, mis omakorda ajapikku heledamaks muutuvad. Ka lümfisõlmed võivad kaaniteraapia järgselt suureneda, kui immuunsüsteem aktiivselt tööle hakkab – see on märk sellest, et keha hakkas mingite mitteomaste ainetega tööd tegema (jääkained või haigustekitajad). See on märk keha suurepärasest iseparanemise võimest!</li>
					<li>Kaanide süljes olevatel ainetel on järgmiseid kasulikke toimeid: verd vedeldavad, trombe lõhustavad, erinevate haigustekitajate vastased, valuvaigistavad, veresoonte mikrovigastusi parandavad, veresooni lõõgastavad, arme jms (mittefunktsionaalne sidekude) lõhustavad, trombide kleepumist blokeerivad, kahjustunud kudesid vähendavad, autoimmuunsete haiguste põhjusi pidurdavad, raku läbilaskevõimet parandavad, kolesterooli alandavad, viljatusprobleeme parandavad, vereringet parandavad; mõningate andmete põhjal ka vähki ravivad või leevendavad ained jne.</li>
					<li>Kaaniteraapia kestvus: esimene kord kulub patsiendi tervisliku seisundi kohta infot kogudes kuni pool tundi aega, lisaks sellele tuleks arvestada kaanide pealolekuga umbes tund ja haavade eest hoolitsemisega – seega optimaalne aeg, millega võiks arvestada, on umbes poolteist tundi. Kaaniteraapiat peaks tegema esimesel korral kuurina (kuur võib kesta sõltuvalt probleemist 5-10 korda) ning hiljem vastavalt vajadusele, ühekordsest kaanipanekust ei sünni suurt muutust organismis. Seda on lihtne võrrelda ravimite kuuriga: näiteks mõne põletiku puhul kehas ei võta me antibiootikume enamasti ühekordselt vaid mingis kindlas annuses ja vähemalt nädal aega.</li>
					<li>Kaaniravi ei ole ohtlik, kui seda viib läbi vastava koolituse läbinud ja pädev terapeut.</li>
				</ul>

				<h2 className="h3">Kaaniteraapia näidustused:</h2>
				<ul>
					<li>Kõik südame- veresoonkonna haigused ja vereringehäired: sh infarkti ja insuldi eelsed ja järgsed seisundid, südame isheemiatõbi jms</li>
					<li>Kõrge vererõhk</li>
					<li>Kõrge kolesterool</li>
					<li>Diabeet ja selle tüsistused</li>
					<li>Veenilaiendid, pärakuveenikomud, veenipõletikud</li>
					<li>Erinevad psühholoogilised probleemid: depressioon, stress, masendus, unehäired</li>
					<li>Migreen, pingepeavalud</li>
					<li>Erinevad nahahaigused</li>
					<li>Haavad, armid: kroonilised ja raskesti paranevad haavad, akuutsed haavad, plastikakirurgia, mikrokirurgia</li>
					<li>Trombiohu korral, kui „veri on paks“, tromb, kopsuemboolia</li>
					<li>Lümfipais ehk tursed</li>
					<li>Tugi- ja liikumisaparaadi haigused: osteoartriit jms</li>
					<li>Neuroloogilised haigused: sh epilepsia</li>
					<li>Kuse- ja suguelundite haigused: sh infertiilsus, põie- ja neerupõletikud, müoomid, tsüstid, eesnäärme suurenemine, alaägedad põletikud, endometrioos</li>
					<li>Kurgu-nina-kõrva ning näo-ja lõualuude haigused: sh polüübid, angiin, kõrvapõletik jne</li>
					<li>Silmahaigused: sh glaukoom</li>
					<li>Endokriinsüsteemi haigused</li>
					<li>Hamba ja igemehaigused: põletikud, hambaauke ei ravi!</li>
					<li>Autoimmuunhaigused</li>
					<li>Mao- ja seedetrakti haigused: kõhukinnisus, haavandid jms</li>
					<li>Kopsu- ja hingamisteede haigused: sh bronhiit, astma, kopsupõletiku järgselt</li>
				</ul>

				<h2 className="h3">Vastunäidustused:</h2>
				<ul>
					<li>Hemofiilia ja muud verehaigused, kui veri ei hüübi</li>
					<li>Koagulopaatia (hüübimissüstemi nõrkus)</li>
					<li>Aneemia ehk kehvveresus, kui hemoglobiin on alla 100g/l</li>
					<li>Aktiivne vähk/kasvaja (kui haiglaravi ei aita enam ja vaja sümptomeid leevendada, siis võib panna).</li>
					<li>Äge põletikuline haigus, palavik</li>
				</ul>

				<h2 className="h3">Ettevaatlikult tehakse teraapiat:</h2>
				<ul>
					<li>Rasedatele, imikutele, väikelastele</li>
					<li>Putukahammustustele allergilistele inimestele</li>
					<li>Hüpotoonikutele (ülemine vererõhk alla 100mmHg)</li>
					<li>Psühhiaatriliste haigustega inimestele (bipolaarsed, skisofreenikud jms)</li>
					<li>Verd vedeldavaid ravimeid võtvatele inimestele (sh kui on kasutusel Marevan, siis tuleb see päevaks-paariks ära jätta, aga AINULT raviarsti loal!)</li>
				</ul>

				<h2 className="h3">Enne kaaniteraapiasse tulekut:</h2>
				<ul>
					<li>Vältida lõhnavaid deodorante, parfüüme, keha kreemitamist, duššigeele, šampoone (kui on vaja pesta, siis eelmisel päeval või ainult puhta veega loputada)</li>
					<li>Vältida tugevalõhnalisi toiduaineid nagu küüslauk, sibul, vürtsid, chilli jms</li>
					<li>Vältida alkoholi, narkootikumide ja suitsu tarvitamist</li>
					<li>Varuda koju ennetavalt mõni sügelusevastane vahend, millest oli juttu eespool.</li>
					<li>Varuda koju sobilikke haavamaterjale (ainult tavalistest plaastritest ei piisa) – näiteks Mesoft haavasidemed (imavaks materjaliks), Mefix rullplaaster, mida saab ise sobivasse mõõtu lõigata vastavalt vajadusele; piisavalt suured Mepore haavaplaastrid, abi võib olla ka pesukaitsmete/sidemete kleepimisest riiete sisepoolele, et veritsuse korral läbi haavamaterjali riideid kaitsta.</li>
					<li>Hoolitseda ennetavalt selle eest, et peale kaaniteraapiat ei oleks sama päeva õhtul ja järgmisel päeval suuri käimisi-toimetamisi, et oleks aega puhata ja taastuda.</li>
					<li>Juua juba enne kaaniteraapiat piisavalt vedelikku.</li>
					<li>Mitte üle mõelda ja hirmu külvata kaanide suhtes, nad on meie austustväärt abilised. </li>
					<li>Küsimuste tekkimisel võtta ühendust kaaniterapeudiga.</li>
				</ul>

				<h2 className="h3">Peale kaaniteraapiat:</h2>
				<ul>
					<li>Võtta endale aega taastumiseks</li>
					<li>Hoolitseda haavakeste eest, vahetada haavamaterjale vastavalt vajadusele.</li>
					<li>Vältida haavade veritsemise aja jooksul vanni, kuuma dušši, saunatamist ja ujumist</li>
					<li>Vältida treeninguid ja massaaži veritsemise perioodil.</li>
					<li>Vältida haavakeste sügamist, et ei tekiks haavainfektsiooni.</li>
					<li>Juua palju vedelikku (vesi, taimeteed)! See on väga oluline keha taastumiseks. Inimese normaalne joodav vedelikukogus päeva jooksul peaks olema 1,5-2 liitrit.</li>
					<li>Võib esineda peavalu, see möödub enamasti päeva-kahe jooksul, ka selle möödumiseks on vaja piisavalt juua.</li>
					<li>Võtta esmajärjekorras ühendust küsimuste või probleemide korral kaaniterapeudiga.</li>
				</ul>

				<p>Teaduslik ingl. keelne lisamaterjal soovi korral lugemiseks: <a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3757849/" target="_blank" rel="noopener noreferrer">http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3757849/</a></p>
			</div>
		),
	},
	'loodusravi-noustamine': {
		title: 'Loodusravi nõustamine',
		canBook: false,
		visibleInHomePage: false,
		summary: 'Toetab südame- ja veresoondkonna haigusi ning vereringe häireid, neuroloogilisi haigusi, mao- ja seedetrakti haigusi, ...',
		coverImageSmall: imgConsult,
		coverImageMedium: imgConsult,
		sidebarContent: 'Loodusravi nõustamine kuulub iga väeka teraapia juurde',
		content: (
			<div className="service-content">
				<p>Kui klient tuleb vastuvõtule, siis käiakse koos terapeudiga läbi tema tervise anamnees, et saada aimu inimese eluviisidest, töö iseloomust, kahjulikest harjumustest, mineviku traumadest jms ning sellest lähtuvalt saab terapeut ka nõu anda.</p>
				<p>Loodusravi nõustamine võib hõlmata toitumise teemadel arutlemist, vitamiinide, toidulisandite või taimsete teede soovitamist, harjutuste tegemist jms - kõik sõltub kliendi teadlikkusest ja vajadustest.</p>
			</div>
		),
	},
};

export const pages = {
	tutvustus: {
		title: 'Tutvusus',
		summary: 'OÜ Väekas nime all tegutseb Eesti loodusterapeut Eliina Tammehoid, kes kirjeldab enda tegemisi järgmiselt ...',
		content: (
			<div className="page-content">
				<img src={imgAboutMe} alt="Eliina" className="content-illustration" />
				<p>OÜ Väekas nime all tegutseb Eesti loodusterapeut Eliina Tammehoid, kes kirjeldab enda tegemisi järgmiselt:</p>
				<p>Olen hariduselt ämmaemand, kuid olen töötanud aastaid ka medõena, nii Eestis kui Soomes. Töökogemust meditsiinis on mul eelnevalt umbes seitse aastat. Huvi aga rahvaravi vastu on olnud juba pikka aega ja seega võtsingi aastaid tagasi vastu otsuse, et ei istu enam käed rüpes ning läksin end selles valdkonnas täiendama.</p>
				<p>Oma uutest oskustest lähtuvalt sündis 2015. aasta märtsis OÜ Väekas, mille alt olen aktiivselt pakkunud soonetasumist. Pakutavaid rahvaravi teenuseid on ajapikku lisandunud veelgi ning klientide vajadusest lähtuvalt nõustan neid, mida nad saavad veel ise oma tervise heaks ära teha.</p>
				<p>Olen osalenud väekate teenuste ja toodete tutvustamiseks erinevatel laatadel, tervisepäevadel ja avatud talude päeval, minu tegemistest on kirjutatud mitmeid artikleid, on tehtud raadiointervjuu ja kutsutud veel mujalegi. Seega soov inimesi aidata ja neile head teha on minus alati olemas olnud, seetõttu ka sellised erialavalikud ja tegutsemine. Püüan anda inimestele tagasi nende valikuvõimalused ja vastutuse nende endi tervise eest.</p>
				<p>Rahvaravi on väga hea vahend oma tervise hoidmiseks ja parandamiseks kas siis iseseisva nähtusena või klassikalise meditsiini täienduseks – see valik jääb aga juba inimese enda otsustada.</p>
				<p>OÜ Väekas teenuseid on juba kasutanud paljud, kellele on oluline oma keha ja tervise eest hoolitsemine – klientide hulgas on näiteks koduperenaisi, edukaid ettevõtjaid, raske füüsilise töö tegijaid, kontoritöötajaid, sportlasi, õpetajaid ja palju teisi.</p>
			</div>
		),
	},
	kontakt: {
		title: 'Kontakt',
		content: (
			<div className="page-content">
				<p>Teenuste asukohad on toodud all kaardi peal välja kuid kokkuleppel võin tulla ka teie koju või töökohta.</p>
				<div className="location-map">
					<h2 className="h3">Pärnu 75, Paide</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.7317371737877!2d25.54972111636103!3d58.88561608150581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46933699a5403567%3A0xd30979ed7fee3138!2sP%C3%A4rnu+75%2C+Paide%2C+72715+J%C3%A4rva+maakond!5e0!3m2!1sen!2see!4v1474902175950"
						width="400"
						height="300"
						frameBorder="0"
						allowFullScreen
					/>
				</div>
				<div className="location-map">
					<h2 className="h3">Roosna-Alliku vallamaja</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2053.1210969786175!2d25.706450416365588!3d59.02993788155511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469339371cb16123%3A0x7cda7c3d8352e79d!2sRoosna-Alliku+vallavalitsus!5e0!3m2!1sen!2see!4v1474902733647"
						width="400"
						height="300"
						frameBorder="0"
						allowFullScreen
					/>
				</div>
				<div className="location-map">
					<h2 className="h3">Kilplaste Koda Müüsleris</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2059.7114217514404!2d25.88057891636212!3d58.91949798151737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4693460c162f2ffd%3A0x58ab4ff953c845a4!2sKilplane+O%C3%9C!5e0!3m2!1sen!2see!4v1474902893845"
						width="400"
						height="300"
						frameBorder="0"
						allowFullScreen
					/>
				</div>
				<div className="location-map">
					<h2 className="h3">Albu küladetuba Kaalepis</h2>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.6890714667097!2d25.683525300670226!3d59.092604998371584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDA1JzMzLjQiTiAyNcKwNDEnMDMuMCJF!5e0!3m2!1set!2see!4v1474970547587"
						width="400"
						height="300"
						frameBorder="0"
						allowFullScreen
					/>
				</div>
				<p>
					OÜ Väekas <br />
					Reg nr: 12810193<br />
					Aadress: Kareda vald, Järvamaa<br />
					Konto nr: EE692200221061510389<br />
					E-mail: <a className="row" href="mailto:info@rahvaravi.ee">info@rahvaravi.ee</a><br />
					Telefon: <a className="row" href="tel:+37255633544">5563 3544</a><br />
				</p>
			</div>
		),
	},
};
