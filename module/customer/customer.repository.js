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
        this.findById = function (id) {
            return Customers.find({_id: id}).exec();
        };
        this.createCustomer=function(customer){
           return new Customers(customer).save(); 
        };
        this.updateCustomer=function(query,data){
           return Customers.findOneAndUpdate(query,data); 
        };
         this.updateCustomerById=function(id,customer){
           return Customers.findByIdAndUpdate(id,customer); 
        };
        
        this.deleteCustomerById = function (id) {
            return Customers.findByIdAndRemove(id);
        };
         this.deleteCustomer=function(query){
           return Customers.findOneAndRemove(query); 
        };
    }
    module.exports = new CustomersRepository();
})();

