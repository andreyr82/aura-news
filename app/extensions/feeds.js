/**
 * Created by Андрей on 24.12.2014.
 */
define(['collections/feeds'], function (FeedsCollection) {
    return {
        initialize: function (app) {
            var Feeds = new FeedsCollection;
            app.sandbox.mvc = {
                collections: {'Feeds': Feeds}
            };
            Feeds.on('add', function (model, collection) {
                app.core.mediator.emit('feeds.add', this.arguments);
            });
            app.core.mediator.on('feeds.load', function () {
                Feeds.fetch({
                    success: function () {
                        app.core.mediator.emit('feeds.loaded', Feeds);
                    }
                });
            });
            app.core.mediator.on('feed.add', function (feed) {
                Feeds.add(feed);
                feed.save();
            })
        }
    }
});