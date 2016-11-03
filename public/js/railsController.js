(function(){
  angular.module('cheerup')
  .controller('railsController', railsController);

  function railsController($http){
    var self = this;
    var rootUrl = "http://localhost:3000"


    // GETS ALL USERS -> TEST
    // $http.get(`http://localhost:3000/users`)
    // .then(function(response){
    //   self.users = response.data
    //   // console.log('SELF', self);
    //   // console.log(response.data);
    //   // Will include a state.go to profile state
    // })
    // .catch(function(error){
    //   console.log('error', error);
    // })

    // $http.get(`http://localhost:3000/cheer_ups`)
    // .then(function(response){
    //   // self.cheerups = response.data
    //   console.log('SELF', self);
    //   console.log(response.data);
    //   // Will include a state.go to profile state
    // })
    // .catch(function(error){
    //   console.log('error', error);
    // })

    // This method will hit the rails API
    // for the create route and make a
    // new user
    this.createUser = function(user) {
      return $http({
        url: 'http://localhost:3000/users',
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
        url: 'http://localhost:3000/users/login'
        method: 'POST'
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
    // for the login route and log out the
    // user
    this.logout = function(user){
      return $http({
        url: 'http://localhost:3000/users/logout'
        method: 'DELETE'
        data: user
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log('ERROR', error);
      })
    }




  }
})()
