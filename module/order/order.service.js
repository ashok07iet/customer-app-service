/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
  function OrderService(){
      var orderRepo=require('./order.repository');
      vm=this;
      vm.getOrders=function(req,res,next){
          orderRepo.orderList(req.param('id')).then(function(orders){
               req.result=orders;
               next();
          });
      };
  }  
  module.exports=new OrderService();  
})();

