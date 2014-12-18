define(function() {
    return function(app) {
        var _ = app.core.util._;
        var historyStarted = false;
        var Backbone;
        return {
            require: {
                paths: {
                    backbone: 'bower_components/backbone/backbone',
                    underscore: 'bower_components/underscore/underscore',
						  bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
                },
                shim: {
                    backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] },
						  bootstrap: { exports: 'Bootstrap', deps: ['jquery'] }
                }
            },
            initialize: function(app) {
                Backbone = require('backbone');
                app.core.mvc    = Backbone;
                app.sandbox.mvc = Backbone;
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