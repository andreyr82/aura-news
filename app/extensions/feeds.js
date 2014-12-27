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
                    Feeds.create(feed.attributes);
                    app.core.mediator.emit('feed.added', Feeds);
                }
            };
            app.sandbox.loaded = def.promise();
            app.core.mediator.on('feeds.load', load);
            app.core.mediator.on('feed.add', add);
        }
    }
});