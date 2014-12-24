/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['text!./feeds.hbs', 'text!./empty.hbs'], function(tpl, emptytpl) {
   var
      template = _.template(tpl),
      emptytemplate = _.template(emptytpl);
   return {
      type: 'Backbone',
      events: {
         //'click .showPost' : 'show'
      },
      //show: function() {
      //   this.sandbox.emit('post.show', this.model);
      //},
      render: function() {
         this.html(emptytemplate());
      },
      initialize: function() {
         //this.html(template({'model': this.model, 'hostname':hostname}));
         //this.model.on('remove', this.destroy, this);
         this.render();
      }
   }
});