/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  function CustomerService(){
      var customerRepo=require('./customer.repository');
      vm=this;
      vm.getCustomers=function(req,res,next){
          customerRepo.customerList().then(function(customer){
               req.result=customer;
               next();
          });
      };
      vm.createCustomer=function(req,res,next){
          var customer=req.body;
          customerRepo.createCustomer(customer).then(function(result){
              req.result=result;
              next();
          });    
      };
      vm.getCustomersById=function(req,res,next){
          var id=req.params.id;
          customerRepo.findById(id).then(function(result){
              req.result=result;
              next();
          });
      };
      vm.updateCustomer=function(req,res,next){
          var customer=req.body.data;
          var query=req.body.query;
          customerRepo.updateCustomer(query,customer).then(function(result){
              req.result=result;
              next();
          });    
      };
       vm.updateCustomerById=function(req,res,next){
          var customer=req.body;
          var id=req.param.id;
          customerRepo.updateCustomerById(id,customer).then(function(result){
              req.result=result;
              next();
          });    
      };
      vm.deleteCustomerById=function(req,res,next){
          var id=req.params.id;
          customerRepo.deleteCustomerById(id).then(function(result){
              req.result=result;
              next();
          });    
      };
       vm.deleteCustomer=function(req,res,next){
          var query=req.body.query;
          customerRepo.deleteCustomer(query).then(function(result){
              req.result=result;
              next();
          });    
      };
  }  
  module.exports=new CustomerService();  
})();

