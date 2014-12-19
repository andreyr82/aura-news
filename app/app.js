require(['bower_components/aura/lib/aura'], function (Aura) {
    var app = new Aura({ debug: { enable: true } });
    app.use('extensions/aura-backbone')
       .use('extensions/backbone-posts')
       .use('extensions/aura-pipes')
       .use('extensions/appear-card.js')
       .start({ components: 'body' }).then(function () {
            console.warn('App started...');
            app.sandbox.emit('pipes.update');
       });
});
