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
      vm.getCustomer=function(req,res,next){
          var id=req.param('id');
          customerRepo.customer(id).then(function(customer){
               req.result=customer;
               next();
          });
      };
      vm.createCustomer=function(req,res,next){
          var body=req.body;
          customerRepo.create(body).then(function(customer){
               req.result=customer;
               next();
          });
      };
       vm.updateCustomer=function(req,res,next){
          var body=req.body;
          customerRepo.update(body).then(function(customer){
               req.result=customer;
               next();
          });
      };
       vm.deleteCustomer=function(req,res,next){
           var id=req.param('id');
          customerRepo.delete(id).then(function(customer){
               req.result=customer;
               next();
          });
      };
  }  
  module.exports=new CustomerService();  
})();

