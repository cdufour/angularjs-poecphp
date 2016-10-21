angular.module("searchApp")
  .filter("ellipse", function() {

    return function(item, maxLength) {

      // version avec opérateur ternaire
      return (item.length > maxLength) ?
        item.substring(0, maxLength) + '...' : item;

    };

  }); // fin ellipseFilter
