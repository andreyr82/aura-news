/**
 * Created by Андрей on 24.12.2014.
 */
define(['collections/feeds', 'backbone'], function (FeedsCollection, Backbone) {
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
            var destroy = function(id) {
                Feeds.get(id).destroy();
                app.core.mediator.emit('feed.destroyed', Feeds);
            };
            var update = function(route) {
                if(Feeds.get(route))
                    app.core.mediator.emit('feed.update', Feeds.get(route));
                else
                    Backbone.history.navigate('', {trigger:true});
            };
            app.sandbox.loaded = def.promise();
            app.core.mediator.on('navigate', update);
            app.core.mediator.on('feeds.load', load);
            app.core.mediator.on('feed.add', add);
            app.core.mediator.on('feed.destroy', destroy);
        }
    }
});