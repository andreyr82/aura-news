/**
 * Created by Андрей on 19.12.14.
 */
define('__component__$spinner@default/main', ['underscore', 'text!./spinner.hbs'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
		render: function() {
			this.html(template());
		},
		show: function() {
			this.$find('.spinner-container').show();
		},
		hide: function() {
			this.$find('.spinner-container').hide();
		},
        initialize: function() {
            this.render(template());
            this.sandbox.on('feed.update', this.show, this);
            this.sandbox.on('posts.updated', this.hide, this);
        }
    }
});