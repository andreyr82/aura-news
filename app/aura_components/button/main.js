/**
 * Created by Андрей on 19.12.2014.
 */
define(['underscore', 'text!./button.hbs', 'backbone'], function(_, tpl, Backbone) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button' : 'update'
        },
        update: function () {
            this.sandbox.emit('navigate', Backbone.history.fragment);
        },
        initialize: function() {
            this.html(template());
        }
    }
});