var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/addressbook');