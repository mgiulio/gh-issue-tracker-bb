var ToolbarView = Backbone.View.extend({
	
	el: '#toolbar',

	initialize: function() {
	},

	render: function() {
		return this;
	},
	
	events: {
		'change .repo': 'onChangeRepo',
	},
	
	onChangeRepo: function(e) {
		var repoName = e.currentTarget.value;
		
		/* if (!this.validRepoName(repoName))
			return; */
		
		issues.setRepo(repoName);
		issues.fetch();
	}

});
