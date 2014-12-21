/**
 * Created by Андрей on 07.09.14.
 */
define(['text!./post.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
		events: {
		    'click .showPost' : 'show'
        },
		show: function() {
			this.sandbox.emit('post.show', this.model);
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