/**
 * Created by andrey on 26.12.14.
 */
define(['text!./feed.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click' : 'update'
        },
        update: function() {
            this.sandbox.emit('feed.update', this.model);
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