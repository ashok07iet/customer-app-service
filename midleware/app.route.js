/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
   // ROUTES FOR OUR API
var express = require('express');
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
    console.log('request:'+req.method);
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
router.use('/customers',require('../module/customer/customer.route'));
  module.exports = router;    
})();

