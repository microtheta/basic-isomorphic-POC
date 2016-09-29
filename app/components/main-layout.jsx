'use strict';

var React = require('react');

module.exports = React.createClass({
	displayName: 'Layout',

	componentDidMount: function(){
		console.log('Hello from main');
	},

	render: function render() {
		return (
			<html>
				<head>
					<script src="/public/app.js"></script>
				</head>
				<body>
					<h1>Hello World!</h1> 
					 {this.props.children}
				</body>
			</html>
		)
	}
});