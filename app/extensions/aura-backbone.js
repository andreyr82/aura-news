define(['backbone'], function(Backbone) {
    return function(app) {
        var _ = app.core.util._;
        var historyStarted = false;
        //var Backbone;
        return {
            //require: {
            //    paths: {
            //        backbone: 'bower_components/backbone/backbone-min',
            //        backboneLocalstorage: 'bower_components/backbone.localStorage/backbone.localStorage',
            //        underscore: 'bower_components/underscore/underscore-min',
				//	bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min'
            //    },
            //    shim: {
            //        backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] },
            //        backboneLocalstorage: { exports: 'Store', deps: ['backbone'] },
				//	bootstrap: { exports: 'Bootstrap', deps: ['jquery'] }
            //    }
            //},
            initialize: function(app) {
                Backbone = require('backbone');
                //app.core.mvc    = Backbone;
                //app.sandbox.mvc = Backbone;
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