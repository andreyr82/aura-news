/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['text!./feeds.hbs'], function (tpl) {
    var
        template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            //'click .showPost' : 'show'
        },
        //show: function() {
        //   this.sandbox.emit('post.show', this.model);
        //},
        render: function (feeds) {
            this.html(template({'feeds': feeds}));
        },
        initialize: function () {
            this.sandbox.on('feeds.loaded', this.render, this);
            this.sandbox.emit('feeds.load');
            //this.render();
        }
    }
});