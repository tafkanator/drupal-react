import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomeView from './views/home/HomeView';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomeView} />
	</Route>
);