angular.module("searchApp")
  .controller("menuController", function($scope) {
  // tableau des menus
  var menus = [
    {label: "Accueil", url:"#/"}, // gérée par angular
    {label: "Admin", url:"#/admin"},
    {label: "Aide", url:"#/help"},
    {label: "Test", url:"#/test"} // url gérée
    // par le routage angular (prefix: #)
  ];

  // on fournit les menus à la vue
  $scope.menus = menus;

}); // fin menuController
