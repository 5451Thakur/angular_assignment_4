(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'MenudataController as menu'
  })

  .state('categoryItems', {
    url: '/category-items/{categoryId}',
    templateUrl: 'src/templates/category-items.template.html',
    controller: 'CategoryItemsController as citems',
    resolve: {
      items: ['$stateParams', 'MenudataService',
              function($stateParams, MenudataService){
                return MenudataService.getItemsForCategory($stateParams)
                .then(function(response){
                  return response.data;
                });
              }]
    }
  });

}

})();
