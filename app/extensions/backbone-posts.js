/**
 * Created by Андрей on 05.09.14.
 */
define(['collections/posts'], function (PostsCollection) {
    return {
        initialize: function (app) {
            var Posts = new PostsCollection;
            Posts.on('add', function (model, collection) {
                app.core.mediator.emit('posts.add', this.arguments);
            });
            app.core.mediator.on('feed.loaded', function (models) {
                Posts.set(models);
                app.core.mediator.emit('posts.updated', Posts);
            });
        }
    }
});
