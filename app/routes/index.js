const express = require('express');
const path = require('path');

const Tweets = require('../controllers/tweets');

const assetsPath = express.static(path.join(__dirname, '../assets'));
const viewsPath = path.join(__dirname, '../views');

const client = express();

client.set('views', viewsPath);
client.set('view engine', 'ejs');

client.use(assetsPath);

client.get('/', Tweets.get);

module.exports = client;
