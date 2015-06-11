'use strict';

var IssuesView = Backbone.View.extend({

	el: '#list',

	initialize: function initialize() {
		this.list = this.$('.items');

		this.listenTo(this.collection, 'sync', this.render);

		scrollWatcher.setThreshold(400).on(this.onNewPage.bind(this)).observe(this.list.get(0)).enable();
	},

	render: function render() {
		this.list.empty();

		this.collection.each(function (m) {
			this.list.append(new IssueView({ model: m }).render().$el);
		}, this);

		//scrollWatcher.enable();

		return this;
	},

	onNewPage: function onNewPage() {
		this.collection.fetchNextPage();
	}

});