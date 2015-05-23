var IssuesView = Backbone.View.extend({
	
	el: '#list',

	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
		this.list = this.$('.items')
	},

	render: function() {
		this.list.empty();
		
		this.collection.each(function(m) {
			var issueView = new IssueView({model: m});
			this.list.append(issueView.render().$el);
		}, this);
	
		return this;
	},
	
	events: {
		'change .repo': 'onChangeRepo',
	},
	
	onChangeRepo: function(e) {
		var repoName = e.currentTarget.value;
		
		/* if (!this.validRepoName(repoName))
			return; */
		
		this.collection.setRepo(repoName);
		this.collection.fetch();
	}

});
