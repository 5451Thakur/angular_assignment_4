(function(){
  'use strict'

  angular.module('Data')
  .controller('CategoryItemsController', CategoryItemsController)

  CategoryItemsController.$inject = ['items'];
  function CategoryItemsController(items){
    var citems = this;
    citems.items = items;
  }

})();
