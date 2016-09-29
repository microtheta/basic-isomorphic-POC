'use strict';

var React = require('react');

import { Link } from 'react-router';

module.exports = React.createClass({
	displayName: 'partial1',

	componentDidMount: function(){
		console.log('Hello from partial1');
	},

	render: function render() {
		return (
			<Link to='/2'> to 2</Link>
		)
	}
});