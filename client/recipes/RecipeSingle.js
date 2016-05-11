//tie the subscription to the template instead of the route.
Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var id = FlowRouter.getParam('_id');
		self.subscribe('singleRecipe', id);
	});
});

//helpers
Template.RecipeSingle.helpers({
	recipe: ()=> {
		//get id from URL
		var id = FlowRouter.getParam('_id');
		return Recipes.findOne({_id: id});
	}
});