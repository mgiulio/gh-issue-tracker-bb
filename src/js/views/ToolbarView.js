'use strict';

var ToolbarView = Backbone.View.extend({

	el: '#toolbar',

	initialize: function initialize() {},

	render: function render() {
		return this;
	},

	events: {
		'change .repo': 'onChangeRepo'
	},

	onChangeRepo: function onChangeRepo(e) {
		var repoName = e.currentTarget.value;

		/* if (!this.validRepoName(repoName))
  	return; */

		issues.setRepo(repoName);
	}

});