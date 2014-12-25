/**
 * Created by Андрей on 24.12.2014.
 */
define(['collections/feeds'], function (FeedsCollection) {
    return {
        initialize: function (app) {
            var Feeds = new FeedsCollection;
            var load = function () {
                Feeds.fetch({
                    success: function () {
                        app.core.mediator.emit('feeds.loaded', Feeds);
                    }
                });
            };
            var add = function (feed) {
                if(Feeds.where({'url':feed.get('url')}).length == 0)
                {
                    Feeds.add(feed);
                    feed.save();
                    load();
                }
            };
            app.sandbox.mvc = {
                collections: {'Feeds': Feeds}
            };
            app.core.mediator.on('feeds.load', load);
            app.core.mediator.on('feed.add', add);
        }
    }
});