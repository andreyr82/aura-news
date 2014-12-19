/**
 * Created by Андрей on 19.12.14.
 */
define(['text!./spinner.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
		  render: function() {
				this.html(template());
		  },
		  toggle: function() {
				this.$find('.spinner-container').toggle();
		  },
        initialize: function() {
            this.sandbox.on('pipes.update', this.toggle, this);
            this.sandbox.on('posts.updated', this.toggle, this);
				this.render(template());
        }
    }
});