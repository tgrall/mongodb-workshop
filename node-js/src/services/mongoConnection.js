'use strict';

// From : http://afshinm.name/mongodb-singleton-connection-in-nodejs
var conf = require('../../conf/conf');
var MongoClient = require('mongodb');

//the MongoDB connection
var connectionInstance;

module.exports = function (callback) {
    //if already we have a connection, don't connect to database again
    if (connectionInstance) {
        callback(connectionInstance);
        return;
    }

    MongoClient.connect(conf.MONGO_URL, function (err, databaseConnection) {
        if (err) throw new Error(err);
        connectionInstance = databaseConnection;
        callback(databaseConnection);
    });
};