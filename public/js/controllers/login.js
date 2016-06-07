angular.module('smartApp', []).controller('loginCtrl', function ($scope) {
    $scope.username = "";
    $scope.password = "";


    
    $scope.doLogin = function () {


        console.log("Inside User Function");
        console.log($scope.username);
        console.log($scope.password);

    }

    




});