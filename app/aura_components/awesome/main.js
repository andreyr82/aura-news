define(['text!./awesome.hbs'], function (tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button': 'update'
        },
        initialize: function () {
            this.sandbox.on('posts.updated', this.render, this);
            this.sandbox.emit('pipes.update');
        },
        update: function () {
            this.sandbox.emit('pipes.update');
        },
        render:function(collection) {
            this.html(template());
            collection.forEach(this.addOne, this);
        },
        addOne:function(post){
            var container = $("<li></li>");
            this.$find('div.list-group').append(container);
            this.sandbox.start([{ name: 'model', options: { el: container, model: post }}]);
        }
    };
});
