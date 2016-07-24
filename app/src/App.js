import React, { PropTypes } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = (props) => (
	<div className="app">
		<Header />
		<div className="content">
			{props.children}
		</div>
		<Footer />
	</div>
);

App.propTypes = {
	children: PropTypes.element,
};

export default App;