/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['text!./feeds.hbs'], function (tpl) {
    var
        template = _.template(tpl);
    return {
        type: 'Backbone',
        render: function (feeds) {
            this.html(template({'feeds': feeds}));
            feeds.forEach(this.addOne, this);
        },
        addOne:function(feed) {
            var container = $('<div></div>');
            this.$find('ul').append(container);
            this.sandbox.start([{ name: 'feed', options: { el: container, model: feed }}]);
        },
        initialize: function () {
            this.sandbox.on('feeds.loaded', this.render, this);
            this.sandbox.emit('feeds.load');
            //this.render();
        }
    }
});