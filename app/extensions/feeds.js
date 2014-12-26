/**
 * Created by Андрей on 24.12.2014.
 */
define(['collections/feeds'], function (FeedsCollection) {
    return {
        initialize: function (app) {
            var def = new $.Deferred();
            var Feeds = new FeedsCollection;
            var load = function () {
                Feeds.fetch({
                    success: function () {
                        app.core.mediator.emit('feeds.loaded', Feeds);
                        def.resolve(Feeds);
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
            app.sandbox.loaded = def.promise();
            app.core.mediator.on('feeds.load', load);
            app.core.mediator.on('feed.add', add);
        }
    }
});