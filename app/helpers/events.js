define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        eventData = require('helpers/eventData');

    app.on('raise:event').then(function (msg) {
        app.showMessage('Event has been raised');
        eventData.message = msg;
    });

    app.on('clear:event').then(function () {
        app.showMessage('Event has been cleared');
        eventData.message = null;
    });
});