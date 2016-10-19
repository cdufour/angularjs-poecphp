angular.module("searchApp")
  .controller("adminController", function($scope) {

    $scope.client = {};

    // on ajoute au $scope la function addClient()
    $scope.addClient = function() {
      console.log($scope.client);
    };

  }); // fin adminController
