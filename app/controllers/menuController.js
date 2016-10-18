angular.module("searchApp")
  .controller("menuController", function($scope) {
  // tableau des menus
  var menus = [
    {label: "Home", url:"search2.html"},
    {label: "Contact", url:"contact.html"},
    {label: "Aide", url:"help.html"}
  ];

  // on fournit les menus à la vue
  $scope.menus = menus;
  
}); // fin menuController
