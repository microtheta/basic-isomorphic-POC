'use strict';


// put Babel at the top to ensure parsing JSX files and also ES6 code
require('babel-register')({
  presets: ['es2015', 'react'],
  only: '*.jsx'
});

const express = require('express');
const chalk = require('chalk');

const ReactEngine = require('react-engine');
const path = require('path');

/**
 * Create Express server.
 */
const app = express();

// create an engine instance
var reactRoutesFilePath = path.join(__dirname + '/app/routes.jsx');
var engine = ReactEngine.server.create({
  routes: require(reactRoutesFilePath),
  routesFilePath: reactRoutesFilePath
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', __dirname + '/app');


// set jsx or js as the view engine
// (without this you would need to supply the extension to res.render())
// ex: res.render('index.jsx') instead of just res.render('index').
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', require('react-engine/lib/expressView'));



app.use('/public', express.static(path.join(__dirname, './public')));


app.get('/favicon.ico' , function(req , res){ res.send();});
/**
 * Router : all client routs handled by react-router
 */
app.get('/1', function(request, response, next) {
  response.render(request.url, {a:Math.random()});
});
app.get('/2', function(request, response, next) {
  response.render(request.url);
});
app.get('/*', function(request, response, next) {
  response.render(request.url);
});


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 9091);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});