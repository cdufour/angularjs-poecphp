angular.module("searchApp")
  .controller("mainController",
    function($scope, $rootScope, countryFactory, clientFactory) {
  // injection de dépendance
  // on fournit le service $scope en entrée de la function
  // afin que le controller puisse d'adresser à la vue
  $scope.countries = countryFactory.getByContinent("Europe");
  $scope.message = "";

  // passage des clients à la vue via le scope
  //$scope.clients = data;
  // variante : on place les données au niveau du rootScope
  // afin que d'autres controllers aient accès à ces données

  if ($rootScope.clients) {
    // si $rootScope.clients existe, s'il n'est pas Undefined
    //if ($rootScope.clients.length != data.length) {
      // la longueur des tableaux diffère, conclusion:
      // des clients ont été ajoutés (ou supprimés) via
      // l'interface d'administration, qui offre
      // justement des possibilités d'agir sur $rootScope.clients
    //}
  } else {
    // si $rootScope.data n'existe pas,
    // on le crée (en lui donnant une valeur initiale)
    // nous avons résolu le problème de l'écrasement
    // systématique de $rootScope.clients par le tableau initial

    // la liste des clients est fournie par clientFactory
    //$rootScope.clients = clientFactory.getAll();

    clientFactory.getAll().then(function(res) {
      // on s'adresse au scope que lorsqu'on a la certitude
      // que le server a renvoyé les données avec succès
      $rootScope.clients = res.data;
    }, function() {
      // fonction de retour en cas d'erreur côté serveur
      $scope.message = "Ne culpabilisez pas, le serveur est fautif";
    });

  }

  // initialisation des variables
  $scope.criterium = 'name';
  $scope.reverse = false; // A-Z

  $scope.changeOrder = function(criterium) {
    $scope.criterium = criterium;
    $scope.reverse = !$scope.reverse;
  };

}); // fin mainController
