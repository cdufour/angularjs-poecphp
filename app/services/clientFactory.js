angular.module("searchApp")
  .factory("clientFactory", function($http) {
    var factory = {};
    var server_url = "https://training-opusidea.c9users.io";
    var clients = [];
    /*
    var clients = [
    {id:1, name:'Hugo', postcode:75014, password:123, country:'France'},
    {id:2, name:'Carrara', postcode:67000, password:456, country:'Italie'},
    {id:3, name:'El Khazraji', postcode:60160, password:789, country:'France'},
    {id:4, name:'Sinescu', postcode:75007, password:123, country:'Roumanie'},
    {id:5, name:'Kautzmann', postcode:67000, password:456, country:'Italie'}];
    */

    // fonction renvoyant la totalité des clients
    factory.getAll = function() {
      // requête ajax asynchrone => problème potentiel
      // la fonction getAll rétrourne son résultat
      // avant la réponse du server

      // on retoune une promesse qui sera résolue
      // dans le futur par la méthode .then
      return $http.get(server_url + "/clients");
    };

    factory.getById = function(id) {
      // Entrée: identifiant
      // Sortie: 1 object (client)
      /*
      var client = null;
      clients.forEach(function(e) {
        // lorsqu'une structure IF n'exécute qu'une seule instruction
        // les accolades sont facultatives
        if (id === e.id) client = e;
      });
      return client;
      */
      // renvoie une promesse
      return $http.get(server_url + "/clients/" + id);
    };

    // function qui ajoute un nouveau client sur le serveur
    factory.add = function(client) {
      return $http.post(server_url + "/clients/new", client);
    };

    return factory;
  }); // fin clientFactory
