(function () {
    "use strict";

    angular.module("MyApp", ["DataMod"])
        .controller("AppController", function ($scope, DataService, $filter) {
            $scope.message = "Hello Class";
            $scope.contacts = [];
            DataService.getContacts().then(function(data){
                $scope.contacts = data;
//                $scope.contacts = $filter('LastNameStarts')(data, 'C');
            });
        })
    .filter("LastNameStarts",function(){
            return function(inArray, startWith){
                var outArray = [];
                if(!startWith){
                    return inArray;
                }
                angular.forEach(inArray, function(contact){
                    if(contact.lastName.toLowerCase().substr(0,startWith.length) === startWith.toLowerCase()){
                        this.push(contact);
                    }
                }, outArray);


                return outArray;
            };
        });
}());