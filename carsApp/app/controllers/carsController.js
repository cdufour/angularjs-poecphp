angular.module("carsApp")
  .controller("carsController", function($scope, carsFactory) {

    carsFactory.getAll().then(function(res) {
      $scope.cars = res.data;
    });

  });
