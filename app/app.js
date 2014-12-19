require(['bower_components/aura/lib/aura'], function (Aura) {
    Aura()
        .use('extensions/aura-backbone')
        .use('extensions/backbone-posts')
        .use('extensions/aura-pipes')
		  .use('aura_components/spinner')
		  .use('aura_components/posts')
		  .use('aura_components/button')
        .start({ components: 'body' }).then(function () {
            console.warn('App started...');
        });
});
