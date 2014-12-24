/**
 * Created by Андрей on 24.12.2014.
 */
define(['backbone'], function(Backbone) {
    return Backbone.Collection.extend({
        localStorage: new Store('aura-feeds')
    });
});