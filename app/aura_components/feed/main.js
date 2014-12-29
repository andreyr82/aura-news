/**
 * Created by andrey on 26.12.14.
 */
define(['underscore', 'text!./feed.hbs'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            //'click' : 'update',
            'click .close' : 'deleteFeed'
        },
        update: function(route) {
            if(route == this.model.get('url')) {
                this.$find('li.feed').addClass('active');
                this.sandbox.emit('feed.update', this.model);
            } else {
                this.$find('li.feed').removeClass('active');
            }
        },
        deleteFeed: function(event) {
            event.stopPropagation();
            this.model.destroy();
        },
        destroy: function() {
            this.remove();
            this.sandbox.stop();
        },
        initialize: function() {
            var hostname = new URL(this.model.get('link')).hostname;
            this.html(template({'model': this.model, 'hostname':hostname}));
            this.model.on('remove', this.destroy, this);
            this.sandbox.on('navigate', this.update, this)
        }
    }
});