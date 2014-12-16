define(function (require) {
    'use strict';

    var Venue = function () {
        var ko = require('knockout'),
            self = this;

        self.location = {
            address1: ko.observable(),
            country: ko.observable(),
            geo: {
                coordinates: ko.observable(),
                type: ko.observable()
            },
            locality: ko.observable(),
            postal_code: ko.observable(),
            region: ko.observable()
        };
        self.locu_id = ko.observable();
        self.name = ko.observable();
    };

    return Venue;
});