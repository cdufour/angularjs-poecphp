angular.module("carsApp")
  .factory("carsFactory", function($http) {

    var factory = {};

    factory.getAll = function() {
      return $http.get("https://training-opusidea.c9users.io/cars");
    };

    factory.getById = function(id) {
      return $http.get("https://training-opusidea.c9users.io/cars/" + id);
    };

    return factory;

  });
