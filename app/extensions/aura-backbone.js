define(['backbone'], function(Backbone) {
    return function(app) {
        var _ = app.core.util._;
        var historyStarted = false;
        return {
            initialize: function(app) {
                app.components.addType('Backbone', Backbone.View.prototype);
            },
            afterAppStart: function(app) {
                if (!historyStarted) {
                    _.delay(function() {
                        Backbone.history.start();
                    }, 200);
                }
            }
        }
    }
});