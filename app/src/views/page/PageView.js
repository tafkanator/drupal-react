import React, { PropTypes } from 'react';

import { pages } from '../../../config/data';

const PageView = (props) => {
	const page = pages[props.route.path] || {};

	return (
		<div className="view page-view">
			<h1>{page.title}</h1>
			{page.content}
		</div>
	);
};

PageView.propTypes = {
	route: PropTypes.shape({
		path: PropTypes.string.isRequired,
	}).isRequired,
};

export default PageView;
