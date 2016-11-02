(function() {
  angular.module('cheerup', ['ui.router'])
    .config(MainRouter);

    AuthRouter.$inject = ['$stateProvider', '$urlRouterProvider']

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../partials/_home.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../partials/_profile.html'
        })
        .state('cheerups', {
          url: '/cheerups',
          templateUrl: '../partials/_cheerups.html'
        })

        $urlRouterProvider.otherwise('/');

      }

})()
