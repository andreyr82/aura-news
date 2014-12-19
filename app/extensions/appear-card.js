define(['extensions/jquery.appear.js'], function(Plugin) {
	return {
		 initialize: function (app) {
			$(function() {
			  $(document.body).on('appear', '.page', function(e, $affected) {
				 // add class called “appeared” for each appeared element
				 $(this).addClass("appeared");
			  });
			  $('.page').appear({force_process: true});
			});
		 }
	 }
});
