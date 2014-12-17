define(['plugins/router', 'durandal/app', 'helpers/events'], function (router, app, events) {
    'use strict';

    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'locations', moduleId: 'viewmodels/locations', nav: true },
                { route: 'locationsSingleton', moduleId: 'viewmodels/locationsSingleton', nav: true },
                { route: 'event', moduleId: 'viewmodels/event', nav: true },
                { route: 'eventTrigger', moduleId: 'viewmodels/eventTrigger', nav: true }
            ]).buildNavigationModel();

            router.mapUnknownRoutes('viewmodels/notFound', 'views/notFound');

            return router.activate();
        }
    };
});