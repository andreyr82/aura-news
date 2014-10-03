require(['bower_components/aura/lib/aura'], function (Aura) {
    Aura()
        .use('extensions/aura-backbone')
        .use('extensions/backbone-posts')
        .use('extensions/aura-pipes')
        .start({ components: 'body' }).then(function () {
            console.warn('Aura started...');
        });
});
