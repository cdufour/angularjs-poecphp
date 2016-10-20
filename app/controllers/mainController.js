angular.module("searchApp")
  .controller("mainController",
    function($scope, $rootScope, countryFactory) {
  // injection de dépendance
  // on fournit le service $scope en entrée de la function
  // afin que le controller puisse d'adresser à la vue

  var data = [
  {name:'Hugo', postcode:75014, password:123, country:'France'},
  {name:'Carrara', postcode:67000, password:456, country:'Italie'},
  {name:'El Khazraji', postcode:60160, password:789, country:'France'},
  {name:'Sinescu', postcode:75007, password:123, country:'Roumanie'},
  {name:'Kautzmann', postcode:67000, password:456, country:'Italie'}];

  $scope.countries = countryFactory.getAll();

  // test
  countryFactory.getByContinent("Afrique");

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
    $rootScope.clients = data;
  }


  // initialisation des variables
  $scope.criterium = 'name';
  $scope.reverse = false; // A-Z

  $scope.changeOrder = function(criterium) {
    $scope.criterium = criterium;
    $scope.reverse = !$scope.reverse;
  };

}); // fin mainController
