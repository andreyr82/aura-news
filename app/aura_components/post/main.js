/**
 * Created by Андрей on 07.09.14.
 */
define(['text!./post.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        initialize: function() {
            var hostname = new URL(this.model.get('link')).hostname;
            this.html(template({'model': this.model, 'hostname':hostname}));
        }
    }
});