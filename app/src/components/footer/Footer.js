import React from 'react';
import './footer.scss';

const Footer = () => (
	<div className="footer">
		<a className="row" href="mailto:eliina@vaekas.ee">
			<span className="icon icon-mail" />
			eliina@vaekas.ee
		</a>
		<a className="row" href="tel:+37255633544">
			<span className="icon icon-phone" />
			5563 3544
		</a>
		<a className="row" href="www.facebook.com/v2ekas" target="blank">
			<span className="icon icon-fb" />
			facebook.com/v2ekas
		</a>
	</div>
);

export default Footer;
