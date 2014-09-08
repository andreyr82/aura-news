/**
 * Created by Андрей on 07.09.14.
 */
define(['text!./model.hbs'], function(tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        initialize: function() {
            this.html(template({'model': this.model}));
        }
    }
});