/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    // ROUTES FOR OUR API
    var express = require('express');
    var router = express.Router();              // get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.use(function (req, res, next) {
        setcustomResponseHeaders(res);
        console.log(JSON.stringify(req.headers));
        var user = req.headers['remote-user'];
            next();
    });
    function setcustomResponseHeaders(res) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept,remote-user');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

    }
    router.use('/customers', require('../module/customer/customer.route'));
    module.exports = router;
})();

