'use strict';

var app = angular.module('chattyApp');

app.controller('MessageCtrl', function ($scope, MessageService) {

    MessageService.getMessages().then(function (response) {
            $scope.messages = response.data;
        });

});
