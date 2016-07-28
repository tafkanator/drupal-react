import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { services, pages } from '../config/data';

import App from './App';
import HomeView from './views/home/HomeView';
import ServiceView from './views/service/ServiceView';
import PageView from './views/page/PageView';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeView} />
		<Route path="teenused">
			<IndexRedirect to={Object.keys(services)[0]} />

			{Object.keys(services).map(serviceKey => (
				<Route path={serviceKey} key={serviceKey} component={ServiceView} />
			))}

		</Route>

		{Object.keys(pages).map(pageKey => (
			<Route path={pageKey} key={pageKey} component={PageView} />
		))}
	</Route>
);
