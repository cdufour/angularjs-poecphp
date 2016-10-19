angular.module("searchApp")
  .controller("adminController", function($scope, $rootScope) {

    // déclaration facultative (JS le fera de lui-même sinon)
    // d'un object client initialisé avec des valeurs null
    // ces valeurs seront mises à jour par les directives ng-model
    // attachées aux input du formulaire
    $scope.client = {
      name: null,
      postcode: null,
      country: null,
      password: null // propriété non gérée dans la vue (pas d'input)
    };

    // on ajoute au $scope la function addClient()
    $scope.addClient = function() {
      // ajouter le client au tableau de clients
      $rootScope.clients.push($scope.client);
      console.log($rootScope.clients);
    };



  }); // fin adminController
