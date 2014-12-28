/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['underscore', 'text!./search.hbs', 'text!./findfeed.hbs', 'bootstrap'], function (_, tpl, feedtpl) {
    var
        template = _.template(tpl),
        feedtemplate = _.template(feedtpl);
    return {
        type: 'Backbone',
        events: {
            'click button' : 'find',
            'click .close' : 'close',
            'click .results .feed' : 'addFeed',
            'keyup input' : 'find'
        },
        find: function() {
            if(this.$find('input').val().length >= 3) {
                this.sandbox.emit('findfeed.find', this.$find('input').val());
                this.$find('.results').show();
            } else {
                this.$find('.results').hide();
            }
        },
        showPopover: function(feeds) {
            if(feeds.length == 0) {
                this.$find('input').popover({'placement': 'bottom'}).popover('show');
                this.$find('input').one('click', function(){
                    $(this).popover('destroy');
                });
            }
        },
        showResults: function(feeds) {
            if(feeds.length > 0 && this.$find('.results').css('display') != 'none') {
                this.$find('.results').css('maxHeight',$(window).height()-51);
                this.$find('.results').html('');
                feeds.forEach(this.addOne, this);
            } else {
                this.$find('.results').hide();
            }
        },
        close: function(e) {
            e.stopPropagation();
            this.closeResults();
        },
        closeResults: function() {
            this.$find('.results').hide();
            this.$find('input').val('');
        },
        addOne:function(feed) {
            this.$find('.results').append(feedtemplate({model:feed}));
        },
        addFeed: function(e) {
            this.sandbox.emit('feed.add', this.sandbox.mvc.collections.FindFeeds.get(e.currentTarget.dataset.cid));
        },
        initialize: function () {
            this.html(template());
            $.when(this.sandbox.loaded).done($.proxy(function(feeds) {
                this.showPopover(feeds)
            }, this));
            this.sandbox.on('findfeeds.updated', this.showResults, this);
            this.sandbox.on('feed.add', this.closeResults, this);
            $(document).mouseup($.proxy(function (e) {
                if ($(e.target).closest('.search').length == 0) {
                    this.$find('.results').hide();
                    this.closeResults();
                }
            }, this));
        }
    }
});