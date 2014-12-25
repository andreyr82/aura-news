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
            app.core.mediator.on('findfeed.finded', function (models) {
                FindFeeds.set(models);
                app.core.mediator.emit('findfeeds.updated', FindFeeds);

            });
            app.core.mediator.on('feed.add', function() {
                FindFeeds.reset();
            })
        }
    }
});