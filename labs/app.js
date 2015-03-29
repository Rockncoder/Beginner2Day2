(function () {
    "use strict";

    angular.module("MyApp",[])
        .controller("AppController", function ($scope) {
            $scope.message = "Hello Class";
            $scope.contacts = [
                {
                    "lastName": "Yoder",
                    "firstName": "Dan",
                    "eMail": "dyoder@gmail.com",
                    "memberId": "87c28bc7-b99d-49b3-b2e3-6a45d9bef62d",
                    "city": "Los Angeles",
                    "state": "CA"
                },
                {
                    "lastName": "Zeng",
                    "firstName": "Helen",
                    "eMail": "hzeng@gmail.com",
                    "memberId": "71028ebc-347a-4921-93c9-ae5c098b2ed8",
                    "city": "Los Angeles",
                    "state": "CA"
                }
            ];
        });
}())