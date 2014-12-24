require(['bower_components/aura/lib/aura'], function (Aura) {
    Aura({ debug: { enable: true } })
        .use('extensions/aura-backbone')
        .use('extensions/aura-googlefeed')
        .use('extensions/backbone-posts')
        .use('extensions/feeds')
        .use('extensions/find-feeds')
        .use('extensions/appear-card')
        .start({ components: 'body' }).then(function () {
            console.warn('App started...');
        });
});
