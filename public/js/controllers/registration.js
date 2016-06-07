angular.module('smartApp', []).controller('regCtrl', function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";


    $scope.birth_day = [];
    $scope.Birth_Month = [
        "January","February","March","April","May","June","July","Auguest","September","October","November",
        "December"                                              
    ];


    for (var i = 1; i <= 31; i++) {
        $scope.birth_day.push(i);
    }


    $scope.saveUser = function () {


        console.log("Inside User Function");

    }

    function userName() {



    }




});