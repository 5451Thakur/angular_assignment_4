(function(){
  'use strict'

  angular.module('Data')
  .controller('MenudataController', MenudataController);

  MenudataController.$inject = ['cats'];
   function MenudataController(cats){
     var menu = this;
     menu.categories = cats;
   };

})();
