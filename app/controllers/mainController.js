angular.module("searchApp")
  .controller("mainController", function($scope) {
  // injection de dépendance
  // on fournit le service $scope en entrée de la function
  // afin que le controller puisse d'adresser à la vue

  var data = [
  {name:'Hugo', postcode:75014, password:123, country:'France'},
  {name:'Carrara', postcode:67000, password:456, country:'Italie'},
  {name:'El Khazraji', postcode:60160, password:789, country:'France'},
  {name:'Sinescu', postcode:75007, password:123, country:'Roumanie'},
  {name:'Kautzmann', postcode:67000, password:456, country:'Italie'}];

  // passage des clients à la vue via le scope
  $scope.clients = data;
  // initialisation des variables
  $scope.criterium = 'name';
  $scope.reverse = false; // A-Z

  $scope.changeOrder = function(criterium) {
    $scope.criterium = criterium;
    $scope.reverse = !$scope.reverse;
  };

}); // fin mainController
