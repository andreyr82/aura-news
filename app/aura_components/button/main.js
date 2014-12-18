/**
 * Created by Андрей on 19.12.2014.
 */
define(['text!./button.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button' : 'update'
        },
        update: function () {
            this.sandbox.emit('pipes.update');
        },
        initialize: function() {
            this.sandbox.emit('pipes.update');
            this.html(template());
        }
    }
});