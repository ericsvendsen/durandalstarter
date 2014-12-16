define(function (require) {
    'use strict';

    var http = require('plugins/http'),
        baseUrl = '/locu';

    var locations = function (data) {
        return http.post(baseUrl + '/locations', data);
    };

    return {
        locations: locations
    };
});