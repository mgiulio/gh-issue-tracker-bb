var IssueView = Backbone.View.extend({
	
	tagName: 'li',
	className: 'item',
	template: tmpl['item'],

	events: {
		//"click .icon": "open",
	},

	initialize: function() {
		//this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	}

});

