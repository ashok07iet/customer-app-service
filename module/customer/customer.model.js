/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    var mongoose = require('bluebird').promisifyAll(require('mongoose'));
    var Schema = mongoose.Schema;

    var customerSchema = new Schema({
        customerId: {
            type: Number,
            required: true
        },
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        State: {
            Name: {
                type: String,
                required: true
            },
            Abbreviation: {
                type: String,
                required: true
            }
        },
        Zip: {
            type: Number,
            required: true
        },
        Gender: {
            type: String,
            required: true
        }

    });
    module.exports = mongoose.model('customers', customerSchema);
})();

