describe('MathController', function () {
    var $controller;

    beforeEach(function () {
        module("UnitTestApp");
    });

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    var obj1 = {
            firstName: "Troy",
            lastName: "Miles"
        },
        obj2 = {
            firstName: "Troy",
            lastName: "Miles"
        };


    //it("Checks properties of objects", function () {
    //    expect(obj1).toBe(obj2);
    //})
    //it("Checks properties of objects", function () {
    //    expect(obj1).toEqual(obj2);
    //})

    it("should have a Math Controller", function () {
        inject(function ($rootScope, $controller) {
            expect($controller("MathController", {$scope: $rootScope})).toBeDefined();
        });
    });

    xdescribe('add', function () {
        it("should be able to add two numbers.", function () {
            var bob = {};
            $controller('MathController', {$scope: bob});
            expect(bob.add(5, 20)).toEqual(25);
        });
        it("should be able to add two numbers as strings.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.add('35', '20')).toEqual(55);
        });
    });

    xdescribe('subtract', function () {
        it("should be able to subtract two numbers.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract(5, 20)).toEqual(-15);
        });
        it("should be able to subtract two numbers as strings.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract('35', '20')).toEqual(15);
        });
        it("should not subtract two strings that are not all numbers.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.subtract('35b', '20x')).toBeNaN();
        });
    });


    describe('multiply', function () {
        it("should be able to multiply two numbers.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply(5, 20)).toEqual(100);
        });
        it("should be able to multiply two numbers as strings.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply('5', '6')).toEqual(30);
        });
        it("should not multiply two strings that are not all numbers.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply('35b', '20x')).toBeNaN();
        });
        it("should not multiply one number.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply(35)).toBeNaN();
        });
        it("should not multiply when one number is null.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply(35, null)).toBe(0);
        });
        it("should be 0 when either  multiply when both numbers are null.", function () {
            var $scope = {};
            $controller('MathController', {$scope: $scope});
            expect($scope.multiply(null, null)).toBe(0);
        });
    });

});
