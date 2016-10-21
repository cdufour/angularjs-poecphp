angular.module("carsApp")
  .controller("carController", function($scope, carsFactory, $routeParams) {

    var carId = $routeParams.id;

    carsFactory.getById(carId).then(function(res) {
      $scope.car = res.data;
    });

  });
