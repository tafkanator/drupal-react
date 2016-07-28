import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './App';
import HomeView from './views/home/HomeView';
import ServiceView from './views/service/ServiceView';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeView} />
		<Route path="teenused">
			<IndexRedirect to="meemassaas" />
			<Route path="meemassaas" component={ServiceView} />
			<Route path="kuputeraapia" component={ServiceView} />
			<Route path="kaaniteraapia" component={ServiceView} />
			<Route path="vana-eesti-massaas" component={ServiceView} />
		</Route>

		<Route path="tutvustus" />
		<Route path="kontakt" />
	</Route>
);
