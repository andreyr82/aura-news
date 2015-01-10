define(['underscore', 'text!./post.hbs'], function (_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        initialize: function () {
            this.sandbox.on('posts.updated', this.render, this);
            this.sandbox.on('navigate', this.clear, this);
        },
        clear: function(route) {
            if(!route)
                this.html('');
        },
        render:function(collection) {
            var content = '';
            collection.forEach(function(post){
                content += template({model:post});
            }, this);
            this.el.innerHTML = '';
            this.el.offsetParent.scrollTop = 0;
            this.el.innerHTML = content;
        }
    };
});
