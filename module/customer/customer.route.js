/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var customerService=require('./customer.service');
    function setResponse(req, res, next) {
        res.status(req.statusCode ? req.statusCode : 200).json(req.result);
    }
    var express=require('express');
    var router=express.Router();
    router.route('/').get(customerService.getCustomers,setResponse);
    router.route('/:id').get(customerService.getCustomer,setResponse);
    router.route('/').post(customerService.createCustomer,setResponse);
    router.route('/').put(customerService.updateCustomer,setResponse);
     router.route('/:id').delete(customerService.deleteCustomer,setResponse);
    module.exports=router;
})();

