// Immediately Invoked Function Expression - IIFE
(function(){
    "use strict";

    angular.module("UnitTestApp", [])
        .controller("MathController", function($scope){
            $scope.add = function(a, b){
                a = parseInt(a, 10);
                b = parseInt(b, 10);
              return a + b;
            };

            $scope.subtract = function(a, b){
                var result = a - b;
                return result;
            };


            $scope.multiply = function(a, b){
                var result = a * b;
                debugger;
                return result;
            };

        })

}());