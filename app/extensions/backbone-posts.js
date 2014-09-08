/**
 * Created by Андрей on 05.09.14.
 */
define(['models/post', 'collections/posts'], function(PostModel, PostsCollection) {
    return function(app) {
        var Posts = new PostsCollection;
        app.sandbox.mvc = {
            collections: { 'Posts':  PostsCollection }
        };
        Posts.on('add', function(model, collection) {
            app.core.mediator.emit('posts.add', this.arguments);
        });
        return {
            initialize: function(app) {
                app.core.mediator.on('pipes.loaded', function(models) {
                    Posts.update(models);
                    app.core.mediator.emit('posts.updated', Posts);
                });
            }
        }
    }
});
