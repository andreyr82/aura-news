/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['underscore', 'text!./feeds.hbs', 'backbone'], function (_, tpl, Backbone) {
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
            return false;
        },
        render: function (feeds) {
            this.html(template({'feeds': feeds}));
        },
        toggleMenu: function() {
            $('.navbar-collapse.in').removeClass('in');
        },
        setActive: function(id) {
            this.$find('a.feed').each(function(idx, el) {
                if(el.hash.substr(1) == id)
                    $(el).find('li').addClass('active');
                else
                    $(el).find('li').removeClass('active');
            });
        },
        initialize: function () {
            this.sandbox.on('feeds.loaded', this.render, this);
            this.sandbox.on('feed.added', this.render, this);
            this.sandbox.on('feed.destroyed', this.render, this);
            this.sandbox.on('navigate', this.setActive, this);
            this.sandbox.emit('feeds.load');
        }
    }
});