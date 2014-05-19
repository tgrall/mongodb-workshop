'use strict';

var Conf = {
    MONGO_URL : process.env.MONGO_URL || 'mongodb://localhost:27017/comics'
};

module.exports = Conf;