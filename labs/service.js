(function () {
    "use strict";

    angular.module("DataMod",[])
        .service("DataService", function ($http, $q) {
            return {
                getContacts: getContacts
            };

            function getContacts() {
                var deferred = $q.defer();

                $http.get("../misc/members.json")
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function () {
                        deferred.reject();
                    });
                return deferred.promise;
            }
        });
}());