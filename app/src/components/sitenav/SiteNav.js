import React, { Component } from 'react';
import './site-nav.scss';

import classNames from 'classnames';
import autobind from 'autobind-decorator';

@autobind
export default class SiteNav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpened: false,
		};
	}

	render() {
		const { isOpened } = this.state;
		
		const classList = classNames('site-nav', { 'is-visible': isOpened });
		return (
			<div className={classList}>
				<ul className="menu">
					<li>
						<a href="#">Teenused</a>
					</li>
					<li>
						<a href="#">Tutvustus</a>
					</li>
					<li className="is-active">
						<a href="#">Kontakt</a>
					</li>
				</ul>

				<button className="menu-toggle" onClick={this.toggleVisibility}>
					Menüü
					<span className="stripes">
						<span className="stripe" />
					</span>
				</button>
			</div>
		);
	}

	toggleVisibility() {
		this.setState({
			isOpened: !this.state.isOpened,
		});
	}
}