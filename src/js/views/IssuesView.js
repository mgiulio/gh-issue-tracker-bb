var IssuesView = Backbone.View.extend({
	
	el: '#list',

	initialize: function() {
		this.list = this.$('.items');
		
		this.listenTo(this.collection, 'sync', this.render);
		
		/* scrollWatcher
			.setDistance(400)
			.on(this.onNewPage)
			.enable()
		; */
	},

	render: function() {
		this.list.empty();
		
		this.collection.each(function(m) {
			this.list.append(new IssueView({model: m}).render().$el);
		}, this);
	
		return this;
	},
	
	onNewPage: function() {
		this.collection.fetchNextPage();
	}
	
});
