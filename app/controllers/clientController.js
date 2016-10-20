angular.module("searchApp")
  .controller("clientController",
    function($rootScope, $scope, $routeParams, clientFactory) {
    // le service $routeParams permet de récupérer
    // les paramètres d'url

    // parseInt convertit chaîne de caractères en valeur numérique
    var clientId = parseInt($routeParams.id);
    //$scope.client = clientFactory.getById(clientId);
    clientFactory.getById(clientId)
      .then(function(res) {
        $scope.client = res.data;
      });
  }); // fin clientController
