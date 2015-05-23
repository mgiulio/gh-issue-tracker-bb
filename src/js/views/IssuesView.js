var IssuesView = Backbone.View.extend({
	
	el: '#list',

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
		this.list = this.$('.items');
	},

	render: function() {
		this.list.empty();
		
		this.collection.each(function(m) {
			this.list.append(new IssueView({model: m}).render().$el);
		}, this);
	
		return this;
	}
	
});
