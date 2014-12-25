/**
 * Created by am.rachkov on 24.12.2014.
 */
define(['text!./search.hbs'], function (tpl) {
    var template = _.template(tpl);
    return {
        type: 'Backbone',
        events: {
            'click button' : 'find',
            'keyup input' : 'find'
        },
        find: function() {
            if(this.$find('input').val().length >= 3) {
                this.sandbox.emit('findfeed.find', this.$find('input').val());
            } else {
                this.$find('.results').hide();
            }
        },
        showPopover: function(feeds) {
            if(feeds.length == 0)
                this.$find('input').popover({'placement':'bottom'}).popover('show');
        },
        showResults: function(feeds) {
            if(feeds.length > 0) {
                this.$find('.results').html(feeds);
                this.$find('.results').css({
                    'left':this.$find('.form-group').offset().left,
                    'top':this.$find('.form-group').offset().top + this.$find('.form-group').height()
                });
                feeds.forEach(this.addOne, this);
                this.$find('.results').show();
            } else {
                this.$find('.results').hide();
            }
        },
        closeResults: function() {
            this.$find('.results').hide();
            this.$find('input').val('');
        },
        addOne:function(feed) {
            var container = $('<div class="feed"></div>');
            this.$find('.results').append(container);
            this.sandbox.start([{ name: 'findfeed', options: { el: container, model: feed }}]);
        },
        initialize: function () {
            this.html(template());
            this.sandbox.on('feeds.loaded', this.showPopover, this);
            this.sandbox.on('findfeeds.updated', this.showResults, this);
            this.sandbox.on('feed.add', this.closeResults, this);
        }
    }
});