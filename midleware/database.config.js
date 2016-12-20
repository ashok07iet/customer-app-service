/**
 * Created by jandhv on 7/21/2016.
 */
(function () {
    'use strict';

    function DBConfig() {
        this.init = function () {
            var mongoose = require('mongoose');
            // Use bluebird
            mongoose.Promise = require('bluebird');

            var dbUrl = 'mongodb://localhost:27017/customer-db';
            var dbOptions = {
                //db: { native_parser: true },
                server: {'auto_reconnect': true, poolSize: 5},
                user: "",
                pass: "",
                promiseLibrary: require('bluebird')
            };
            return mongoose.connect(dbUrl, dbOptions); // connect to our database
        };
    }
    module.exports = new DBConfig();
})();