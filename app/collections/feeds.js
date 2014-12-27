/**
 * Created by Андрей on 24.12.2014.
 */
define(['backbone', 'backboneLocalstorage'], function(Backbone, Store) {
    return Backbone.Collection.extend({
        localStorage: new Store('aura-feeds')
    });
});