/**
 * Created by andrey on 26.12.14.
 */
define(['underscore', 'text!./title.hbs', 'backbone'], function(_, tpl, Backbone) {
    var template = _.template(tpl);
    return {
        render: function (model) {
            if(model)
                this.html(template({'model':model}));
        },
        clear: function(route) {
            if(!route)
                this.html('');
        },
        initialize: function() {
            this.sandbox.on('feed.update', this.render, this);
            this.sandbox.on('navigate', this.clear, this);
            this.render(this.sandbox.mvc.collections.Feeds.get(Backbone.history.fragment));
        }
    }
});