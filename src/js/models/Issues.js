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
			
			var self = this;
			this.fetch({
				url: nextPageUrl, 
				success: function(collection, models, options) {
					self.updatePaginationUrls(options.xhr.getAllResponseHeaders());
					self.url = nextPageUrl;
				},
				error: function() {
					self.fetchNextPage();
				},
				remove: false
			});
		},
	
		updatePaginationUrls: function(httpHeadersString) {
			var headers = http.headerObject(httpHeadersString.trim());
			
			var self = this;
			headers['Link'].split(',').forEach(function(link) {
				var parts = link.trim().split(';');
				var url = parts[0].slice(1, -1);
				var rel = parts[1].trim().split('=')[1].slice(1, -1);
				self.paginationUrls[rel] = url;
			});
		}
		
	});
	
	return Collection;

})();
