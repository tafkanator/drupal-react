import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter } from 'react-router';
import classNames from 'classnames';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const PageTransitionTime = 600; // ms

const App = (props) => (
	<div className={classNames('app', { 'is-front': props.router.isActive('/', true) })}>
		<Header />
		<ReactCSSTransitionGroup
			component="div"
			className="content-wrap"
			transitionName="page-transition"
			transitionEnterTimeout={PageTransitionTime}
			transitionLeaveTimeout={PageTransitionTime}
		>
			<div className="content" key={props.location.pathname}>
				{props.children}
			</div>

		</ReactCSSTransitionGroup>
		<Footer />
	</div>
);

App.propTypes = {
	children: PropTypes.element,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired,
	}).isRequired,
	router: PropTypes.shape({
		isActive: PropTypes.func.isRequired,
	}).isRequired,
};

export default withRouter(App);
