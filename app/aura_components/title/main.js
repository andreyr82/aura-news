/**
 * Created by andrey on 26.12.14.
 */
define(['underscore', 'text!./title.hbs'], function(_, tpl) {
    var template = _.template(tpl);
    return {
        render: function (model) {
            this.html(template({'model':model}));
        },
        initialize: function() {
            this.sandbox.on('feed.update', this.render, this);
        }
    }
});