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
            'click .search-btn' : 'find',
            'click .results .feed' : 'addFeed',
            'keyup paper-input' : 'find'
        },
        find: function() {
            if(this.$find('paper-input').val().length >= 3) {
                this.sandbox.emit('findfeed.find', this.$find('paper-input').val());
                this.$find('.results').show();
            } else {
                this.$find('.results').hide();
            }
        },
        showPopover: function(feeds) {
            if(feeds.length == 0) {
                this.el.querySelector('core-tooltip').show = true;
                this.$find('paper-input').one('focus', $.proxy(function(){
                    this.el.querySelector('core-tooltip').show = false;
                    this.el.querySelector('core-tooltip').disabled = true;
                }, this));
            } else {
                this.el.querySelector('core-tooltip').show = false;
                this.el.querySelector('core-tooltip').disabled = true;
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
        closeResults: function() {
            this.$find('.results').hide();
            this.$find('paper-input').val('');
        },
        addOne:function(feed) {
            if(feed.get('url'))
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