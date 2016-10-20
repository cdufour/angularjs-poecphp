angular.module("searchApp")
  .controller("clientController",
    function($rootScope, $scope, $routeParams, clientFactory) {
    // le service $routeParams permet de récupérer
    // les paramètres d'url

    // identifiant du client
    var clientId = $routeParams.id;
    console.log(clientFactory.getAll());

  }); // fin clientController
