angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {   //argument is a module or angular special var
  // Your code here
  //maybe an array of objects, which are links -- JSON??
  $scope.data = {};   

  //probably gets links from db; does not happen on click happens on pg load
  //$scope.getLinks = function() {};    
  angular.extend($scope, Links);

  $scope.getLinks = function() {
    Links.getData()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  $scope.getLinks();


  /*
      $scope.visits = 0;
      $scope.title = '';
      $scope.url = '';
      $scope.base_url = '';
      $scope.code = '';

      $scope.method1 = function() {};

      $scope.method2 = function() {};

      <img src='/redirect_icon.png'/>
  <div class='info'>
    <div class='visits'><span class='count'>{{visits}}</span>Visits</div>
    <div class='title'>{{title}}</div>
    <div class='original'>{{url}}</div>
    <a href='{{base_url}}/{{code}}'>{{base_url}}/{{code}}</a>
  </div>
  */
});

/*
don't need this here -- Links factory is in services.js
.factory('', function() {
  //do stuff in here that you don't want destroyed
  //factories can return anything; services / factories differ only in syntax



  return {
  
  };
});

*/
