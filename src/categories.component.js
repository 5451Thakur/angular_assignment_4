(function () {
'use strict';

angular.module('MenuApp')
.component('menuClass', {
  templateUrl: 'src/templates/menuClass.html',
  bindings: {
    items: '<'
  }
});

})();
