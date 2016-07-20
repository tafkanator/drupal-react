import React, { PropTypes } from 'react';

const App = (props) => (
	<div className="app">
		tere
		{props.children}
	</div>
);

App.propTypes = {
	children: PropTypes.element,
};

export default App;