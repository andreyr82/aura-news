/**
 * Created by am.rachkov on 26.12.2014.
 */
define(['../bower_components/backbone/backbone'], function (Backbone) {

   return Backbone.Router.extend({

      routes: {
         "": "subsList",
         "user/list": "userList",
         "user/new": "userNew",
         "user/edit/:id": "userEdit",
         "user/delete/:id": "userDelete",
         "subs/list": "subsList",
         "subs/new": "subsNew",
         "subs/edit/:id": "subsEdit",
         "subs/read/:id": "subsRead"
      },

      // Subs:
      subsList: function () {
         $.when(
            App.subss.length || App.subss.fetch()
         ).done(function () {
               require(['views/subs/list'], function (SubsList) {
                  App.sideRegion.show(new SubsList({
                     collection: App.subss
                  }));
               })
            });
         $.when(
            App.items.length || App.items.fetch()
         ).done(function () {
               require(['views/item/list'], function (ItemList) {
                  App.mainRegion.show(new ItemList({
                     parentEl: App.mainRegion.el,
                     collection: App.items
                  }));
               });
            });
      },

      // Todo: do something if model wasn't found
      subsEdit: function (id) {
         $.when(
            App.subss.length || App.subss.fetch()
         ).done(function () {
               require(['views/subs/form'], function (Form) {
                  var model = App.subss.get(id);
                  App.mainRegion.show(new Form({
                     model: model
                  }));
               });
            });
      }
   });
});