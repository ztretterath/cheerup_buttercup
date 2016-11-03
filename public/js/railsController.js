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

    this.createUser = function(user) {
      return $http({
        url: 'http://localhost:3000/users',
        method: 'POST',
        data: user
      })
    }

  }
})()
