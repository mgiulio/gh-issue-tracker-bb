'use strict';

var Issues = (function () {

	var Collection = Backbone.Collection.extend({

		model: Issue,
		paginationUrls: {},

		initialize: function initialize(models, options) {},

		setRepo: function setRepo(repo) {
			this.repo = repo;

			this.paginationUrls = {
				'next': 'https://api.github.com/repos/' + this.repo + '/issues?state=all'
			};

			this.reset();
			this.fetchNextPage();
		},

		fetchNextPage: function fetchNextPage() {
			var _this = this;

			if (!('next' in this.paginationUrls)) return;

			var nextPageUrl = this.paginationUrls['next'];

			this.fetch({
				url: nextPageUrl,
				success: function success(collection, models, options) {
					_this.updatePaginationUrls(options.xhr.getAllResponseHeaders());
					_this.url = nextPageUrl;
				},
				error: function error() {
					_this.fetchNextPage();
				},
				remove: false
			});
		},

		updatePaginationUrls: function updatePaginationUrls(httpHeadersString) {
			var _this2 = this;

			var headers = http.headerObject(httpHeadersString.trim());

			this.paginationUrls = {};

			if ('Link' in headers) headers['Link'].split(',').forEach(function (link) {
				var parts = link.trim().split(';');
				var url = parts[0].slice(1, -1);
				var rel = parts[1].trim().split('=')[1].slice(1, -1);
				_this2.paginationUrls[rel] = url;
			});
		}

	});

	return Collection;
})();