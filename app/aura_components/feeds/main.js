/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['underscore', 'text!./feeds.hbs'], function (_, tpl) {
    var
        template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button.close' : 'deleteFeed'
        },
        deleteFeed: function(e) {
            this.sandbox.emit('feed.destroy', e.currentTarget.dataset.id);
            if(e.currentTarget.dataset.id == Backbone.history.fragment)
                Backbone.history.navigate('', {trigger:true});
        },
        render: function (feeds) {
            this.html(template({'feeds': feeds}));
        },
        initialize: function () {
            this.sandbox.on('feeds.loaded', this.render, this);
            this.sandbox.on('feed.added', this.render, this);
            this.sandbox.on('feed.destroyed', this.render, this);
            this.sandbox.emit('feeds.load');
        }
    }
});