var Issues = (function() {

	var Collection = Backbone.Collection.extend({
		
		model: Issue,
		
		initialize: function(models, options) {
		},
		
		setRepo: function(repo) {
			this.repo = repo;
			this.page = 0;
			
			this.fetchNextPage();
		},
		
		fetchNextPage: function() {
			var nextPageUrl = this.getNextPageUrl();
			
			var self = this;
			this.fetch({
				url: nextPageUrl, 
				success: function() {
					self.page++; 
					self.url = nextPageUrl;
				},
				error: function() {
					self.fetchNextPage();
				},
				remove: false
			});
		},
		
		getNextPageUrl: function() {
			return `https://api.github.com/repos/${this.repo}/issues?state=all&page=${this.page + 1}`;
		}
		
	});
	
	return Collection;

})();