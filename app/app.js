// déclaration initiale du module (de l'application)
// on précise les dépendances (deuxième paramètre de la
// fonction module() lors de cette déclaration initiale

// notre application utilise le module additionnel ngRoute
// pour gérer le routage
angular.module("searchApp", ['ngRoute']);

angular.module("searchApp")
  .config(function($routeProvider) {
    $routeProvider
      .when('/test',{
        controller: 'testController',
        templateUrl:'app/views/test.html'
      });
  });
