/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var Customers = require('./customer.model');
    function CustomersRepository(){
        this.customerList=function(){
          return Customers.find({}).exec();  
        };
        this.customer=function(id){
           return Customers.find({customerId:id}).exec();  
        };
        this.create=function(cus){
            var customer=new Customers(cus);
           return customer.save();
        };
        this.update=function(cus){
            return Customers.findOneAndUpdate({customerId:cus.customerId},cus);  
        };
         this.delete=function(id){
            return Customers.find({customerId:id}).remove().exec();  
        };
    }
    module.exports = new CustomersRepository();
})();

