import React, { Component, PropTypes } from 'react';
import './site-nav.scss';

import { Link, withRouter, createRoutes } from 'react-router';
import classNames from 'classnames';
import autobind from 'autobind-decorator';

import routes from '../../routes';
import { services } from '../../../config/data';

@autobind
class SiteNav extends Component {

	static propTypes = {
		router: PropTypes.shape({
			isActive: PropTypes.func.isRequired,
			listen: PropTypes.func.isRequired,
		}).isRequired,
	}

	constructor(props) {
		super(props);

		this.unListenRouter = null;
	}

	state = {
		isOpened: false,
	};

	componentDidMount() {
		this.unListenRouter = this.props.router.listen(() => {
			const { isOpened } = this.state;

			if (isOpened) {
				this.setState({
					isOpened: false,
				});
			}
		});
	}

	componentWillUnmount() {
		this.unListenRouter();
	}

	render() {
		const { isOpened } = this.state;

		const paths = createRoutes(routes);
		const classList = classNames('site-nav', { 'is-visible': isOpened });

		return (
			<div className={classList}>
				{this.renderList(paths[0].childRoutes, '', 'menu')}

				<button className="menu-toggle" onClick={this.toggleVisibility}>
					Menüü
					<span className="stripes">
						<span className="stripe" />
					</span>
				</button>
			</div>
		);
	}

	renderList(routeList, parentPath, classList = null) {
		const { router } = this.props;

		const getLink = (path, prefix) => `${prefix}/${path}`;

		const getClassList = (path, prefix, hasChildren) => classNames({
			'is-active': router.isActive(getLink(path, prefix)),
			'has-children': hasChildren,
		});

		return (
			<ul className={classList}>
				{routeList.map((route) => (
					<li key={route.path} className={getClassList(route.path, parentPath, !!route.childRoutes)}>
						<Link to={getLink(route.path, parentPath)}>
							{this.getTitle(route.path)}
						</Link>

						{route.childRoutes
							? this.renderList(route.childRoutes, getLink(route.path, parentPath), 'submenu')
							: null
						}
					</li>
				))}
			</ul>
		);
	}

	toggleVisibility() {
		this.setState({
			isOpened: !this.state.isOpened,
		});
	}

	getTitle(path) {
		if (services[path]) {
			return services[path].title;
		}

		return path;
	}
}

export default withRouter(SiteNav);
