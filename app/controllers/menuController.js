angular.module("searchApp")
  .controller("menuController", function($scope) {
  // tableau des menus
  var menus = [
    {label: "Home", url:"/"},
    {label: "Admin", url:"contact.html"},
    {label: "Aide", url:"help.html"},
    {label: "Test", url:"/#/test"}
  ];

  // on fournit les menus à la vue
  $scope.menus = menus;

}); // fin menuController
