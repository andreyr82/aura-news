/**
 * Created by Андрей on 05.09.14.
 */
define(['backbone', 'models/post'], function(Backbone, Post) {
    return Backbone.Collection.extend({
        model: Post
    });
});
