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
		if (this.model.get('state') === 'closed')
			this.el.classList.add('closed');
		else
			this.el.classList.remove('closed');
		
		this.$el.html(this.template(this.model.toJSON()));
		
		return this;
	}

});

