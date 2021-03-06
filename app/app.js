require(['bower_components/aura/lib/aura'], function (Aura) {
    Aura({ debug: { enable: true } })
        .use('extensions/aura-backbone')
        .use('extensions/backbone-posts')
        .use('extensions/aura-pipes')
        .use('extensions/appear-card')
        .start({ components: 'body' }).then(function () {
            console.warn('App started...');
        });
});
