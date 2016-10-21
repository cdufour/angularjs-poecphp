// déclaration initiale du module (de l'application)
// on précise les dépendances (deuxième paramètre de la
// fonction module() lors de cette déclaration initiale

// notre application utilise le module additionnel ngRoute
// pour gérer le routage
angular.module("searchApp", ['ngRoute']);

angular.module("searchApp")
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'app/views/search.html',
        controller: 'mainController'
      })
      .when('/clients',{
        templateUrl:'app/views/search.html',
        controller:'mainController'
      })
      .when('/clients/:id',{
        templateUrl:'app/views/client.html',
        controller:'clientController'
      })
      .when('/admin',{
        templateUrl:'app/views/admin.html',
        controller:'adminController'
      })
      .when('/help',{
        templateUrl:'app/views/help.html',
        controller:'helpController'
      })
      .when('/test',{
        controller:'testController',
        templateUrl:'app/views/test.html'
      })
      .otherwise({redirectTo:'/'});
      // redirection vers page d'accueil
      // lorsque la route n'est pas trouvée

  });
