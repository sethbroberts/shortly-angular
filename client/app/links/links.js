angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {   //argument is a module or angular special var
  // Your code here
  $scope.data = {};   

  //not sure about this
  angular.extend($scope, Links);      //don't need**

  //gets links from db
  $scope.getLinks = function() {
    Links.getData()                 //Links.getAll()
      .then(function(data) {
        $scope.data.links = data; //had to set .links property = data
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  $scope.getLinks();


});


