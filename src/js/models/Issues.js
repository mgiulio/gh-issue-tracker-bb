var Issues = (function() {

	var Collection = Backbone.Collection.extend({
		
		model: Issue,
		paginationUrls: {},
		
		initialize: function(models, options) {
		},
		
		setRepo: function(repo) {
			this.repo = repo;
			
			this.paginationUrls['next'] =  `https://api.github.com/repos/${this.repo}/issues?state=all`;
			
			this.fetchNextPage();
		},
		
		fetchNextPage: function() {
			var nextPageUrl = this.paginationUrls['next'];
			
			this.fetch({
				url: nextPageUrl, 
				success: (collection, models, options) => {
					this.updatePaginationUrls(options.xhr.getAllResponseHeaders());
					this.url = nextPageUrl;
				},
				error: () => {
					this.fetchNextPage();
				},
				remove: false
			});
		},
	
		updatePaginationUrls: function(httpHeadersString) {
			var headers = http.headerObject(httpHeadersString.trim());
			
			headers['Link'].split(',').forEach((link) => {
				var parts = link.trim().split(';');
				var url = parts[0].slice(1, -1);
				var rel = parts[1].trim().split('=')[1].slice(1, -1);
				this.paginationUrls[rel] = url;
			});
		}
		
	});
	
	return Collection;

})();
