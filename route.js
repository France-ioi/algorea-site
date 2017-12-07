var myApp = angular.module('algorea', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

   $routeProvider

   // route for the main page
   .when('/', {
      templateUrl : 'pages/presentation.html',
      controller  : 'PageCtrl'
   })

   // route for the qualification page
   /*.when('/qualification', {
      templateUrl : 'pages/qualification.html',
      controller  : 'PageCtrl'
   })*/

   // route for the participation page
   .when('/participation', {
      templateUrl : 'pages/participation.html',
      controller  : 'PageCtrl'
   })

   // route for the preparation page
   .when('/preparation', {
      templateUrl : 'pages/preparation.html',
      controller  : 'PageCtrl'
   })

   // route for the awards page
   .when('/recompenses', {
      templateUrl : 'pages/awards.html',
      controller  : 'PageCtrl'
   })

   // route for the results page
   .when('/resultats', {
      templateUrl : 'pages/results.html',
      controller  : 'PageCtrl'
   })

   // route for the who are we page
   .when('/quiSommesNous', {
      templateUrl : 'pages/whoAreWe.html',
      controller  : 'PageCtrl'
   })

   // route for the coordinator page
   .when('/coordinateur', {
      templateUrl : 'http://coordinateur.concours-alkindi.fr',
      controller  : 'PageCtrl'
   })

   // route for the legal informations page
   .when('/infosLegales', {
      templateUrl : 'pages/legalInformation.html',
      controller  : 'PageCtrl'
   })

   // route for the instruction page
   .when('/infosTour2', {
      templateUrl : 'infos/instructionsTour2.html?v=23',
      controller  : 'PageCtrl'
   })

   .otherwise({
      redirectTo: '/'
   });

   $locationProvider.hashPrefix('');

}]);

myApp.controller('PageCtrl', function($scope, $location) {
   $scope.isActive = function (viewLocation) {
     return viewLocation === $location.path();
   };
});

// Create tabs
myApp.controller('TabController', ['$scope', function($scope) {
   $scope.tab = 1;

   $scope.setTab = function(newTab){
      $scope.tab = newTab;
   };

   $scope.isTabSet = function(tabNum){
      return $scope.tab === tabNum;
   };
}]);

myApp.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();
  });
});
