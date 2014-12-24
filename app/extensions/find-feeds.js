/**
 * Created by Андрей on 25.12.2014.
 */
define(['collections/feeds'], function (FeedsCollection) {
    return {
        initialize: function (app) {
            var FindFeeds = new FeedsCollection;
            app.sandbox.mvc = {
                collections: {'FindFeeds': FindFeeds}
            };
            FindFeeds.on('add', function (model, collection) {
                //app.core.mediator.emit('feeds.add', this.arguments);
            });
            app.core.mediator.on('feed.finded', function (models) {
                FindFeeds.set(models);
                app.core.mediator.emit('feeds.updated', FindFeeds);

            });
        }
    }
});