/**
 * Created by Андрей on 05.09.14.
 */
define({
    initialize: function (app) {
        var loadPipes = function () {
            $.ajax({
                url: 'http://pipes.yahoo.com/pipes/pipe.run?_id=4194ee67cd3b27d3abf4f24ef03b459e&_render=json',
                success: function(result) {
                    app.core.mediator.emit('feed.loaded', result.value.items);
                },
                error: function(xhr, status, error) {
                    app.core.mediator.emit('feed.error', error);
                }
            });
        };
        app.core.mediator.on('feed.update', loadPipes);
    }
});

