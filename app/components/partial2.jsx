'use strict';

var React = require('react');
import { Link } from 'react-router';

module.exports = React.createClass({
	displayName: 'partial2',

	componentDidMount: function(){
		console.log('Hello from partial2');
	},

	render: function render() {
		return (
			<Link to='/1'> to 1</Link>
		)
	}
});