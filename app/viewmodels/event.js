define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router'),
        http = require('plugins/http'),
        ko = require('knockout'),
        eventData = require('helpers/eventData');

    var ctor = function () {
        var self = this;

        self.message = ko.observable(eventData.message || 'Nothing has happened yet.');
        self.title = ko.observable('Event Receiver');
    };

    return ctor;
});