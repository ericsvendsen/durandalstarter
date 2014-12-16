define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router'),
        http = require('plugins/http'),
        ko = require('knockout'),
        knockoutvalidation = require('knockout-validation'),
        Venue = require('models/Venue'),
        locationService = require('services/locationService');

    var ctor = function () {
        var self = this;

        // properties
        self.fields = ko.observableArray(['name', 'location']);
        self.name = ko.observable().extend({ required: true });
        self.city = ko.observable();
        self.state = ko.observable();
        self.zipCode = ko.observable().extend({ number: true });
        self.country = ko.observable('United States');
        self.states = ko.observableArray(['','AK','AL','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']);
        self.searchResults = ko.observableArray([]);
        self.searching = ko.observable(false);
        self.validationModel = ko.validatedObservable({
            name: self.name,
            zipCode: self.zipCode
        });

        // actions
        self.search = function () {
            self.searchResults([]);
            self.searching(true);
            var data = {
                'fields': self.fields(),
                'venue_queries': [
                    {
                        'name': self.name(),
                        'location': {
                            'locality': self.city(),
                            'region': self.state(),
                            'postal_code': self.zipCode(),
                            'country': self.country()
                        }
                    }
                ]
            };
            locationService.locations(data).then(function (data) {
                var venue;
                $.each(data.venues, function (idx, result) {
                    venue = new Venue();
                    self.searchResults.push(ko.mapping.fromJS(result, venue));
                });
            }).fail(function (err) {
                app.showMessage(err);
            }).always(function () {
                self.searching(false);
            });
        };
    };

    return ctor;
});