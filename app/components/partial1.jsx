'use strict';

var React = require('react');

import { Link } from 'react-router';

module.exports = React.createClass({
	displayName: 'partial1',

	getInitialState: function() {
		// if this is first request server can pass some data for initial rendering
		return {
			random: this.props.a || ''
		}
	},
	componentDidMount: function() {
		//if this is not first request, we need to get data from server and set into state
		if(!this.props.a) {
			this.setState({
				random: Math.random()
			});
		}
	},

	render: function render() {
		return (
			<div>
				<Link to='/2'> to 2</Link>
				{this.state.random}
			</div>
		)
	}
});