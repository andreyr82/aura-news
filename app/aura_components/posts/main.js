define(['underscore', 'text!./post.hbs'], function (_, tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        initialize: function () {
            this.sandbox.on('posts.updated', this.render, this);
        },
        render:function(collection) {
            this.html('');
            collection.forEach(this.addOne, this);
        },
        addOne:function(post){
            this.$el.append(template({model:post}));
        }
    };
});
