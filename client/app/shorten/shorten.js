angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  //not sure about this
  angular.extend($scope, Links);

  $scope.addLink = function (linkobj) {
    //$scope.loading = true;  //spiffygif
    console.log('now trying to shorten', linkobj);
    Links.postData(linkobj)
      .then(function(data) {
        //$scope.loading = false;
        console.log(data); //???
        $location.path('/links'); //example looks like it goes to /links here
      })
      .catch(function(err) {
        console.log(err);
      });    
  };

});
