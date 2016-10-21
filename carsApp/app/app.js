angular.module("carsApp", ['ngRoute']);

angular.module("carsApp")
  .config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl:'app/views/cars.html',
        controller: 'carsController'
      })
      .when('/cars/:id', {
        templateUrl:'app/views/car.html',
        controller: 'carController'
      });

  });
