import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/main-layout.jsx';

import partial1 from './components/partial1.jsx';

import partial2 from './components/partial2.jsx';

import React from 'react';

module.exports = (
	<Router history={browserHistory}>
		<Route path='/' component={MainLayout}> 
			<Route path='/1' component={partial1}> </Route>
			<Route path='/2' component={partial2}> </Route>
		</Route>
	</Router>
);