/**
 * Created by Андрей on 24.12.2014.
 */
define(['backbone', 'models/feed'], function(Backbone, Feed) {
    return Backbone.Collection.extend({
        model: Feed,
        localStorage: new Store('todos-backbone')
    });
});