(function(){
  'use strict'

  angular.module('Data')
  .controller('MenudataController', MenudataController);

  MenudataController.$inject = ['MenudataService'];
  function MenudataController(MenudataService){
    var menu = this;
    menu.categories = [];
    var promise = MenudataService.getAllCategories();
    promise.then(function(response){
      menu.categories = response.data;
    })
  };

})();
