/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    var mongoose = require('bluebird').promisifyAll(require('mongoose'));
    var Schema = mongoose.Schema;
     var orderSchema = new Schema({
        Product: {
            type: String,
            required: true
        },
        Price: {
            type: Number,
            required: true
        },
         Quantity: {
            type: Number,
            required: true
        },
        Date: {
            type: Date,
            required: true
        },
        CustomerId: {
            type: Number,
            required: true
        }
    });
    module.exports = mongoose.model('orders', orderSchema);
})();

