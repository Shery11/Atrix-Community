const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');



var userRoutes = require('./server/routes/userRoutes');
var startupRoutes = require('./server/routes/startupRoutes');
var eventsRoutes = require('./server/routes/eventsRoutes');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// connecting mongo
mongoose.connect('mongodb://localhost/atrixCommunity', {
  useMongoClient: true,
  /* other options */
}).then(function(db){
	console.log('Connected to Atrix database');
});


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/user',userRoutes);
app.use('/startup',startupRoutes);
app.use('/event',eventsRoutes);

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));




















