var Issues = (function() {

	var Collection = Backbone.Collection.extend({
		model: Issue,
		urlTemplate: function(repo) {return `https://api.github.com/repos/${repo}/issues?state=all`; }, //repo => `https://api.github.com/repos/${repo}/issues?state=all`, // Put this inclasprops?
		initialize: function(models, options) {
		},
		setRepo: function(repo) {
			this.url = this.urlTemplate(repo);
		}
	});
	
	return Collection;

})();