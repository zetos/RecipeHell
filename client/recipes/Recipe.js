//events
Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	}
});

//herpers
Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	}
});