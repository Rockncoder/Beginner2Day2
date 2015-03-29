describe('MathController', function () {
    var $controller;

    beforeEach(function () {
        module("UnitTestApp");
    });

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    it("should have a Math Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller('MathController', {$scope: $rootScope})).toBeDefined();
        });
    });

    describe('add', function(){
        it("should be able to add two numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.add(10, 20)).toEqual(30);
        });
        it("should convert strings to numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.add('5', '20')).toEqual(25);
        });
    });
    describe('subtract', function(){
        it("should be able to subtract two numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract(10, 20)).toEqual(-10);
        });
        it("should convert strings to numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract('25', 20)).toEqual(5);
        });
    });

    describe('multiply', function(){
        it("should have a multiply method.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply).toBeDefined();
        });
        xit("should be able to multiply two numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply(10, 10)).toEqual(100);
        });
        xit("should convert strings to numbers", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract('25', 20)).toEqual(5);
        });
    });
});
