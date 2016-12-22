/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var Orders = require('./order.model');
    function OrderssRepository(){
        this.orderList=function(cusId){
            console.log('orderList');
          return Orders.find({CustomerId:cusId}).exec();  
        }; 
    }
    module.exports = new OrderssRepository();
})();

