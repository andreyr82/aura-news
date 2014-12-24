/**
 * Created by Андрей on 23.12.2014.
 */
define({
    initialize: function (app) {
        var
            version = "1.0",
            findURL = "https://ajax.googleapis.com/ajax/services/feed/find",
            loadURL = "https://ajax.googleapis.com/ajax/services/feed/load";
        var feedProcess = function (url, query, callback) {
            $.ajax({
                "url": url,
                "data": {
                    "v": version,
                    "q": query,
                    "num": 100
                },
                "dataType": "jsonp",
                "success": callback,
                "error": function (xhr, status, error) {
                    app.core.mediator.emit('feed.error', error);
                }
            });
        };
        app.core.mediator.on('feed.find', function (query) {
            feedProcess(findURL, query, function (result) {
                app.core.mediator.emit('feed.finded', result.responseData.entries);
            });
        });
        app.core.mediator.on('feed.update', function (query) {
            feedProcess(loadURL, query, function (result) {
                app.core.mediator.emit('feed.loaded', result.responseData.feed.entries);
            });
        });
    }
});