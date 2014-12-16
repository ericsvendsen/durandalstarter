define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router'),
        http = require('plugins/http'),
        ko = require('knockout');

    var ctor = function () {
        var self = this;

        // properties
        self.title = ko.observable('Event Trigger');

        self.triggerEvent = function () {
            app.trigger('new:event', 'Hey, you clicked that button');
        };
    };

    return ctor;
});