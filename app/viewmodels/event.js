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
        self.message = ko.observable(eventData.message || 'Nothing to see here.');
        self.title = ko.observable('Event Receiver');

        // computed values
        self.messageClass = ko.computed(function () {
            return eventData.message ? 'alert alert-danger' : 'alert alert-success';
        });
    };

    return ctor;
});