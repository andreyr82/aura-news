/**
 * Created by andrey on 26.12.14.
 */
define(['text!./feed.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click' : 'update',
            'click .close' : 'deleteFeed'
        },
        update: function() {
            this.sandbox.emit('feed.update', this.model);
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
        }
    }
});