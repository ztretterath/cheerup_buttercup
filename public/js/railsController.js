(function(){
  angular.module('cheerup')
  .controller('railsController', railsController);

  function railsController($http, $state){
    var self = this;
    var rootUrl = "http://localhost:3000"

    $http.get(`${rootUrl} + /cheerups`)
    .then(function(response){
      console.log(response.data);
      // Will include a state.go to profile state
    })
    .catch(function(error){
      console.log('error', error);
    })


  }
})()
