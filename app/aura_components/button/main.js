/**
 * Created by Андрей on 19.12.2014.
 */
define(['underscore', 'text!./button.hbs'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button' : 'update'
        },
        update: function () {
            //this.sandbox.emit('feed.update', 'http://habrahabr.ru/rss/best/');
        },
        initialize: function() {
            this.html(template());
        }
    }
});