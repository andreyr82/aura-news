define(['backbone', 'router/router'], function(Backbone, Router) {
    return function(app) {
        var _ = app.core.util._;
        var historyStarted = false;
        return {
            initialize: function(app) {
                app.components.addType('Backbone', Backbone.View.prototype);
            },
            afterAppStart: function(app) {
                $.when(app.sandbox.loaded).done(function() {
                    app.sandbox.router = new Router(app);
                    Backbone.history.start();
                });
            }
        }
    }
});