/**
 * Created by Андрей on 25.12.2014.
 */
define(['underscore', 'text!./findfeed.hbs'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click' : 'add'
        },
        add: function() {
            this.sandbox.emit('feed.add', this.model);
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