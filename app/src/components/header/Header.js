import React from 'react';
import './header.scss';

import SiteNav from '../sitenav/SiteNav';

const Header = () => (
	<div className="header">
		<h1 className="logo">
			<a href="#">Väekas</a>
		</h1>

		<SiteNav />

		<p className="slogan h2">
			&quot;Eesti pärimusmeditsiin rahvaravi austajale&quot;
		</p>
	</div>
);

export default Header;