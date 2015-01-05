require.config( {
    paths: {
        text:         'bower_components/requirejs-text/text',
        jquery:     'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone-min',
        backboneLocalstorage: 'bower_components/backbone.localStorage/backbone.localStorage',
        underscore: 'bower_components/underscore/underscore-min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        underscore: { exports: '_' },
        backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] },
        backboneLocalstorage: { exports: 'Store', deps: ['backbone'] },
        bootstrap: { exports: 'Bootstrap', deps: ['jquery'] }
    }
});
require([
        'bower_components/aura/lib/aura',
        'aura_components/spinner/main',
        'aura_components/title/main',
        'aura_components/button/main',
        'aura_components/search/main',
        'aura_components/posts/main',
        'aura_components/feeds/main',
        'aura_components/feed/main'
    ], function (Aura) {
    var app = new Aura({ debug: { enable: true } })
        .use('extensions/aura-backbone')
        .use('extensions/aura-googlefeed')
        .use('extensions/backbone-posts')
        .use('extensions/feeds')
        .use('extensions/find-feeds');
    app.start({ components: 'body' }).then(function () {
        console.warn('App started...');
        app.sandbox.on('navigate', function() {
            document.querySelector('core-drawer-panel').closeDrawer();
        })
    });
});
