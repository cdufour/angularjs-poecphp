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

    factory.getById = function(id) {
      // Entrée: identifiant
      // Sortie: 1 object (client)
      var client = null;
      clients.forEach(function(e) {
        // lorsqu'une structure IF n'exécute qu'une seule instruction
        // les accolades sont facultatives
        if (id === e.id) client = e;
      });
      return client;
    };

    return factory;
  }); // fin clientFactory
