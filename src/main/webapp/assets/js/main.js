//var object = {};
//
//_.extend(object, Backbone.Events);
//
//object.on("show-message", function (msg) {
//
//
//});

//Backbone.sync = function (method, model) {
//    console.log("I've been passed " + method + " with " + JSON.stringify(model));
//};

// object.trigger("show-message", "Hello World");


var Message = Backbone.Model.extend({
        urlRoot: '/api/hosts',
        defaults: {
            'id': '',
            'status': ''
        }
    }
)

var SearchResultView = Backbone.View.extend({
    el: "#search-result",
    tpl: _.template($("#search-result-template").html()),

    render: function () {
        this.$el.html(this.tpl(this.model.toJSON()));

        return this;
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    doSearch: function (ip_address) {
        this.model.set("id", ip_address);
        this.model.fetch();
    }
});

var message = new Message();
var searchResultView = new SearchResultView({model: message});

var SearchButtonView = Backbone.View.extend({
    el: '#search-button',
    events: {
        'click': "doSearch"
    },
    doSearch: function () {
        var ip_address = $('#search-input')[0].value
        this.trigger('beacon.search', ip_address)
        return true
    }
});


var searchButtonView = new SearchButtonView();

searchResultView.listenTo(searchButtonView, 'beacon.search', searchResultView.doSearch);



