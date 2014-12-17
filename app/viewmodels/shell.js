define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'locations', moduleId: 'viewmodels/locations', nav: true },
                { route: 'locationsSingleton', moduleId: 'viewmodels/locationsSingleton', nav: true },
                { route: 'eventTrigger', moduleId: 'viewmodels/eventTrigger', nav: true },
                { route: 'event', moduleId: 'viewmodels/event', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});