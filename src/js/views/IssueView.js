'use strict';

var IssueView = Backbone.View.extend({

	tagName: 'li',
	className: 'item',
	template: tmpl['item'],

	events: {},

	initialize: function initialize() {},

	render: function render() {
		if (this.model.get('state') === 'closed') this.el.classList.add('closed');else this.el.classList.remove('closed');

		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}

});

//"click .icon": "open",

//this.listenTo(this.model, 'change', this.render);