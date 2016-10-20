angular.module("searchApp")
  .factory("clientFactory", function() {
    var factory = {};

    var clients = [
    {id:1, name:'Hugo', postcode:75014, password:123, country:'France'},
    {id:2, name:'Carrara', postcode:67000, password:456, country:'Italie'},
    {id:3, name:'El Khazraji', postcode:60160, password:789, country:'France'},
    {id:4, name:'Sinescu', postcode:75007, password:123, country:'Roumanie'},
    {id:5, name:'Kautzmann', postcode:67000, password:456, country:'Italie'}];

    // fonction renvoyant la totalité des clients
    factory.getAll = function() {
      return clients;
    };

    return factory;
  }); // fin clientFactory
