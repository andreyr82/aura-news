/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['text!./search.hbs'], function(tpl) {
   var template = _.template(tpl);
   return {
      initialize: function() {
         this.html(template());
      }
   }
});