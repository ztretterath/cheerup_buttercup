// (function(){
//   angular.module('cheerup')
//   .controller('railsController', railsController);
//
//   function railsController($http, $state, $stateParams){
//     var self = this;
//     self.currentUser = JSON.parse(localStorage.getItem('user'));
//     var rootUrl = "http://localhost:3000";
//
//     // This method will hit the rails API
//     // for the create route and make a
//     // new user
//     this.createUser = function(user) {
//       return $http({
//         url: `${rootUrl}/users`,
//         method: 'POST',
//         data: user
//       })
//       .then(function(response){
//         console.log(response);
//       })
//       .catch(function(error){
//         console.log('ERROR', error);
//       })
//     }
//
//     // This method will hit the rails API
//     // for the login route and log in the
//     // user with jwt
//     this.login = function(user){
//       return $http({
//         url: `${rootUrl}/users/login`,
//         method: 'POST',
//         data: user
//       })
//       .then(function(response){
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         localStorage.setItem('user', response.data.user);
//         self.currentUser = JSON.parse(localStorage.getItem('user'));
//         $state.go('profile', {url:'/profile'});
//       })
//       .catch(function(error){
//         console.log('ERROR ~>', error);
//       })
//     }
//
//     // This method will hit the rails API
//     // for the login route and log out the
//     // user
//     this.logout = function(user){
//       localStorage.removeItem('user');
//       console.log('LOGGED OUT');
//     }
//
//     this.createCheerup = function(cheerup){
//       debugger;
//       return $http({
//         url: `${rootUrl}/users/:id/add_cheer_up`,
//         method: 'POST',
//         data: {cheerup: cheerup}
//       })
//       .then(function(response){
//         self.newCheerup = response.config.data.cheerup;
//         var cheerups = self.currentUser.cheer_ups;
//         cheerups.unshift(self.newCheerup); // adds to beginning of array
//         console.log(self.currentUser.cheer_ups);
//       })
//       .catch(function(error){
//         console.log('ERROR ~>', error);
//       })
//     }
//
//   }
// })()



(function(){
  angular.module('cheerup')
  .controller('railsController', function($http, $state){
    var self = this;
    var rootUrl = "http://localhost:3000";

    this.createUser = function(user) {
    console.log(user);
    return $http({
      url: `${rootUrl}/users`,
      method: 'POST',
      data: {user: user}
    })
    .then(function(response) {
      console.log(response);
      if (response.data.status === 200) {
        console.log('success');
        self.success = true;
      }
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.login = function(user) {
    return $http({
      url: `${rootUrl}/users/login`,
      method: 'POST',
      data: {user: user}
    })
    .then(function(response) {
      console.log(response);
      self.user = response.data.user;
      self.id = response.data.user.id;
      // console.log(self.user);
      console.log('token >>>', response.data.token);
      // localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('token',response.data.token)
          $state.go('profile', {url: '/profile', user: response.data.user})
      })
      .catch(function(err) {
        console.log(err);
      })
    }

      this.logout = function(user){
      localStorage.removeItem('user');
      console.log('LOGGED OUT');
    }

  this.destroy = function(user){
   debugger;
    return $http({
      url: `${rootUrl}/users/:id`,
      method: 'DELETE',
      data: {user: user}
    })
  }



  }); //end of controller
})()
