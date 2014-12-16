define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        eventData = require('helpers/eventData');

    app.on('new:event').then(function (msg) {
        app.showMessage('Event has been triggered');
        eventData.message = msg;
    });
});