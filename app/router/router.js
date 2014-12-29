/**
 * Created by am.rachkov on 26.12.2014.
 */
define(['backbone'], function (Backbone) {
    var app;
    return Backbone.Router.extend({

        routes: {
            "*feed": "loadFeed"
        },

        loadFeed: function (route) {
            app.core.mediator.emit('navigate', route);
        },

        initialize: function (appInstance) {
            app = appInstance;
        }
    });
});