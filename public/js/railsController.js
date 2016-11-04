(function(){
  angular.module('cheerup')
  .controller('railsController', railsController);

  function railsController($http, $state, $stateParams){
    var self = this;
    self.currentUser = JSON.parse(localStorage.getItem('user'));
    var rootUrl = "http://localhost:3000";


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

    // this.getUsers = function(users){
    //   return $http({
    //     url: 'http://localhost:3000/users',
    //     method: 'GET',
    //     data: users
    //   })
    //   .then(function(response){
    //     self.users = response.data
    //     console.log(response);
    //   })
    //   .catch(function(error){
    //     console.log('ERROR', error);
    //   })
    // }


    // This method will hit the rails API
    // for the 'users GET' route and grab
    // data of the current user based on
    // current user's id
    // $http.get('http://localhost:3000/users/:id')
    //   .then(function(response){
    //     console.log(response);
    //     // self.currentUser = response.data.user
    //   })
    //   .catch(function(error){
    //     console.log('ERROR', error);
    //   })
    // this.getUser = function(user){
    //   return $http({
    //     url: 'http://localhost:3000/users/:id',
    //     method: 'GET',
    //     data: user
    //   })
    //   .then(function(response){
    //     console.log(response);
    //   })
    // }

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
        self.currentUser = JSON.parse(localStorage.getItem('user'));
        $state.go('profile', {url:'/profile'});
      })
      .catch(function(error){
        console.log('ERROR ~>', error);
      })
    }

    // This method will serve as a
    // helper method to retrieve the
    // data of the logged in user
    // $http.get(`${rootUrl}/users/:id`)
    //   .then(function(response){
    //     self.currentUser = response.data.user;
    //     // console.log(response);
    //   })
    //   .catch(function(error){
    //     console.log('ERROR ~>', error);
    //   })
    // this.getUser = function(user){
    //   return $http({
    //     url: 'http://localhost:3000/users/:id',
    //     method: 'GET',
    //     data: user
    //   })
    //   .then(function(response){
    //     self.currentUser = response.data.user
    //     console.log(response);
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
    // }

    // This method will hit the rails API
    // for the login route and log out the
    // user
    this.logout = function(user){
      localStorage.removeItem('user');
      console.log('LOGGED OUT');
    }




  }
})()
