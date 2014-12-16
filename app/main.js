﻿requirejs.config({
    paths: {
        'text': '/bower_components/requirejs-text/text',
        'durandal':'/bower_components/durandal/js',
        'plugins' : '/bower_components/durandal/js/plugins',
        'transitions' : '/bower_components/durandal/js/transitions',
        'knockout': '/bower_components/knockout.js/knockout',
        'mapping': '/bower_components/knockout-mapping/knockout.mapping',
        'knockout-validation': '/bower_components/knockout-validation/Dist/knockout.validation',
        'bootstrap': '/bower_components/bootstrap/dist/js/bootstrap',
        'jquery': '/bower_components/jquery/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    },
    deps: ['knockout', 'mapping'],
    callback: function (ko, mapping) {
        'use strict';
        ko.mapping = mapping;
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'knockout', 'knockout-validation', 'helpers/events'],  function (system, app, viewLocator, ko, knockoutvalidation, events) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    ko.validation.init({
        grouping: { deep: true, observable: true, live: false }
    });

    app.title = 'Durandal Starter Kit';

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});