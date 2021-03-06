define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router'),
        http = require('plugins/http'),
        ko = require('knockout'),
        knockoutvalidation = require('knockout-validation'),
        Venue = require('models/Venue'),
        locationService = require('services/locationService');

    return {
        // properties
        fields: ko.observableArray(['name', 'location']),
        name: ko.observable().extend({ required: true }),
        city: ko.observable(),
        state: ko.observable(),
        zipCode: ko.observable().extend({ number: true }),
        country: ko.observable('United States'),
        states: ko.observableArray(['','AK','AL','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']),
        searchResults: ko.observableArray([]),
        searching: ko.observable(false),
        validationModel: function () {
            return ko.validatedObservable({
                name: this.name,
                zipCode: this.zipCode
            });
        },

        // actions
        search: function () {
            var self = this;
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
        },

        // durandal callbacks
        compositionComplete: function (child, parent, settings) {
            $('#name').focus();
        }
    };
});