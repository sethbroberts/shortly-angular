angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  //not sure about this
  angular.extend($scope, Links);

  $scope.addLink = function () {
    Links.postData($scope.link)
      .then(function(data) {
        console.log(data); //???
        $location.path('/links'); //example looks like it goes to /links here
      })
      .catch(function(err) {
        console.log(err);
      });    
  };

});
