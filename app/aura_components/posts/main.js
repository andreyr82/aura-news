define(['text!./posts.hbs'], function (tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        initialize: function () {
            this.sandbox.on('posts.updated', this.render, this);
        },
        render:function(collection) {
            this.html(template());
            collection.forEach(this.addOne, this);
			this.sandbox.appear();
        },
        addOne:function(post){
            var container = $('<div class="well page"></div>');
            this.$find('div.list-group').append(container);
            this.sandbox.start([{ name: 'post', options: { el: container, model: post }}]);
        }
    };
});
