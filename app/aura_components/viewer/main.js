/**
 * Created by Андрей on 18.12.14.
 */
define(['underscore', 'text!./viewer.hbs', 'bootstrap'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        render: function(model) {
		    this.html(template({'model': model}));
            this.$find('.modal').modal();
        },
        initialize: function() {
            this.sandbox.on('post.show', this.render, this);
        }
    }
});