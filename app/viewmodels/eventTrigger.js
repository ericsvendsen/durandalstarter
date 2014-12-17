define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router'),
        http = require('plugins/http'),
        ko = require('knockout'),
        eventData = require('helpers/eventData');

    var ctor = function () {
        var self = this;

        // properties
        self.title = ko.observable('Event Trigger');
        self.isTriggered = ko.observable(false);

        // actions
        self.raiseEvent = function () {
            self.isTriggered(true);
            app.trigger('raise:event', 'Hey, you clicked that button');
        };

        self.clearEvent = function () {
            self.isTriggered(false);
            app.trigger('clear:event');
        };

        // durandal callbacks
        self.activate = function () {
            self.isTriggered(eventData.message ? true : false);
        };
    };

    return ctor;
});