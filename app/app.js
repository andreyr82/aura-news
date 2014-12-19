require(['bower_components/aura/lib/aura'], function (Aura) {
    Aura()
        .use('extensions/aura-backbone')
        .use('extensions/backbone-posts')
        .use('extensions/aura-pipes')
		  .use('extensions/appear-card.js')
        .start({ components: 'body' }).then(function () {
            console.warn('App started...');
        });
});
