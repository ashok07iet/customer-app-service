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
    router.route('/')
            .get(customerService.getCustomers, setResponse)
            .post(customerService.createCustomer,setResponse)
            .put(customerService.updateCustomer,setResponse)
            .delete(customerService.deleteCustomer,setResponse);
    router.route('/:id')
            .get(customerService.getCustomersById, setResponse)
            .put(customerService.updateCustomerById,setResponse)
            .delete(customerService.deleteCustomerById,setResponse);
    module.exports=router;
})();

