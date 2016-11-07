(function(){
  angular.module('cheerup')
  .controller('railsController', railsController);

  function railsController($http, $state, $stateParams){

    var self = this;
    var rootUrl = "http://localhost:3000";
    self.currentUser = JSON.parse(localStorage.getItem('user'));

    // This method will hit the rails API
    // for the create route and make a
    // new user
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
      .then(function(response){
        $state.go('profile', {url: '/profile'});
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    // This method will hit the rails API
    // for the login route and log in the
    // user with jwt
    this.login = function(user){
      return $http({
        url: `${rootUrl}/users/login`,
        method: 'POST',
        data: {user: user}
      })
      .then(function(response){
        self.currentUser = response.data.user
        self.id = response.data.user.id
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data.user));
        $state.go('profile', {url:'/profile', user: response.data.user});
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
      localStorage.removeItem('token')
      console.log('LOGGED OUT');
    }

    this.createCheerup = function(cheerup, user_id){
      var cheerup = {
        title: cheerup.title,
        category: cheerup.category,
        content: cheerup.content
      }
      return $http({
        url: `${rootUrl}/users/:id/add_cheer_up`,
        method: 'POST',
        data: {cheerup: cheerup}
      })
      .then(function(response){
        self.currentUser = JSON.parse(localStorage.getItem('user'));
        self.newCheerup = response.config.data.cheerup;
        var cheerups = self.currentUser.cheer_ups;
        var newCheerup = response.config.data.cheerup;
        cheerups.unshift(newCheerup); // adds to beginning of array
        console.log(cheerups);
      })
      .catch(function(error){
        console.log('ERROR ~>', error);
      })
    }

    this.deleteUser = function(users){
      console.log("Deleting===>", users)
      // self.user.splice(index, 1);
      return $http({
        url: `${rootUrl}/users/:id`,
        method: 'DELETE',
        data: {users: users}
      })
    }

    this.update(function(user_id, newPassword){
      return $http({
        url: `${rootUrl}/users/:id`,
        method: 'PATCH',
        data: {password: newPassword}
      })
      .then(function(response){
        localStorage.removeItem('user');
        localStorage.removeItem('token')
        $state.go('home', {url: '/'})
      })
      .catch(function(error){
        console.log(error);
      })
    })


  }
})() //end controller

//     this.login = function(user) {
//       return $http({
//         url: `${rootUrl}/users/login`,
//         method: 'POST',
//         data: {user: user}
//       })
//       .then(function(response) {
//         console.log(response);
//         self.user = response.data.user;
//         self.id = response.data.user.id;
//         // console.log(self.user);
//         console.log('token >>>', response.data.token);
//         // localStorage.setItem('token', JSON.stringify(response.data.token))
//         localStorage.setItem('token',response.data.token)
//             $state.go('profile', {url: '/profile', user: response.data.user})
//       })
//       .catch(function(err) {
//         console.log(err);
//       })
//     }
//   }); //end of controller
// })()
