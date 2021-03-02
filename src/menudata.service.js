(function(){
  'use strict';

  angular.module('Data')
  .service('MenudataService', MenudataService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')

MenudataService.$inject = ['$http', 'ApiBasePath'];
function MenudataService($http, ApiBasePath){

  var service = this;

  service.getAllCategories = function(){
    var c = $http({
      method: "GET",
      url: (ApiBasePath + "categories.json")
    });
    return c;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var i = $http({
      method: "GET",
      url: (ApiBasePath + "menu_items.json?category=" + categoryShortName.categoryId)
    });
    return i;

  }

}

})();
