'use strict';

var app = angular.module('chattyApp');

app.service('MessageService', function($http, $q) {

    var deferred = $q.defer();

    this.getMessages = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:8000/'
        }).then(function(response) {
            response = response.data;
            deferred.resolve(response)
        });
        return deferred.promise;
    }

});
