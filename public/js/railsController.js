(function(){
  angular.module('cheerup')
  .controller('railsController', railsController);

  function railsController($http, $state, $stateParams){
    var self = this;
    self.currentUser = JSON.parse(localStorage.getItem('user'));
    var rootUrl = "http://localhost:3000";

    // This method will hit the rails API
    // for the create route and make a
    // new user
    this.createUser = function(user) {
      return $http({
        url: `${rootUrl}/users`,
        method: 'POST',
        data: user
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log('ERROR', error);
      })
    }

    // This method will hit the rails API
    // for the login route and log in the
    // user with jwt
    this.login = function(user){
      return $http({
        url: `${rootUrl}/users/login`,
        method: 'POST',
        data: user
      })
      .then(function(response){
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('user', response.data.user);
        self.currentUser = JSON.parse(localStorage.getItem('user'));
        $state.go('profile', {url:'/profile'});
      })
      .catch(function(error){
        console.log('ERROR ~>', error);
      })
    }

    // This method will hit the rails API
    // for the login route and log out the
    // user
    this.logout = function(user){
      localStorage.removeItem('user');
      console.log('LOGGED OUT');
    }

    this.createCheerup = function(cheerup){
      debugger;
      return $http({
        url: `${rootUrl}/users/:id/add_cheer_up`,
        method: 'POST',
        data: {cheerup: cheerup}
      })
      .then(function(response){
        self.newCheerup = response.config.data.cheerup;
        var cheerups = self.currentUser.cheer_ups;
        cheerups.unshift(self.newCheerup); // adds to beginning of array
        console.log(self.currentUser.cheer_ups);
      })
      .catch(function(error){
        console.log('ERROR ~>', error);
      })
    }

  }
})()
