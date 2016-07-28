import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import './gfx/main.scss';
/*
// srcroll page to top when url changes
let prevLocation = {};
browserHistory.listenBefore(location => {
	const pathChanged = prevLocation.pathname !== location.pathname;
	const hashChanged = prevLocation.hash !== location.hash;

	if (pathChanged || hashChanged) window.scrollTo(0, 0);
	prevLocation = location;
});
*/
ReactDOM.render(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('root')
);
