define(function (require) {
    'use strict';

    var app = require('durandal/app'),
        router = require('plugins/router');

    return {
        goBack: function () {
            router.navigateBack();
        },
        navigateHome: function () {
            router.navigate('#/');
        }
    };
});