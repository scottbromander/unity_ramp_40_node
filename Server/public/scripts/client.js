var myApp = angular.module("myApp", ['ngMaterial']);

myApp.config(['$mdThemingProvider', function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey');
}]);

myApp.controller("baseController", ["$scope", "$http", function($scope, $http){
    $scope.postOne = function(){
      $http.get("/first").then(function(response){
          console.log("Here: ", response.data);
      });
    };

    $scope.postTwo = function(){
      $http.get("/second").then(function(response){
          console.log("Here: ", response.data);
      });
    };

    $scope.postThree = function(){
      $http.get("/third").then(function(response){
          console.log("Here: ", response.data);
      });
    };

    $scope.speedAdjust = function(speed){
      $http.get("/speed/" + speed).then(function(response){
          console.log("Here: ", response.data);
      });
    }
}]);

// $("document").ready(function(){
//   enable();
// });
//
// function enable(){
//   $(".test-one").on("click", postOne);
//   $(".test-two").on("click", postTwo);
//   $(".test-three").on("click", postThree);
//
//   $(".speed-neg").on("click", changeSpeed);
//   $(".speed-no").on("click", changeSpeed);
//   $(".speed-pos").on("click", changeSpeed);
// }
//
// function changeSpeed(){
//   $.ajax({
//     type: "GET",
//     url: "/speed/" + $(this).data("speed"),
//     success: function(response){
//       console.log(response);
//     }
//   });
// }
//
// function postOne(){
//   $.ajax({
//     type: "GET",
//     url: "/first",
//     success: function(response){
//       console.log(response);
//     }
//   });
// }
//
// function postTwo(){
//   $.ajax({
//     type: "GET",
//     url: "/second",
//     success: function(response){
//       console.log(response);
//     }
//   });
// }
//
// function postThree(){
//   $.ajax({
//     type: "GET",
//     url: "/third",
//     success: function(response){
//       console.log(response);
//     }
//   });
// }
