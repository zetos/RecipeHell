//tie the subscription to the template instead of the route.
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		//get all recipes from this user (publish.js)
		self.subscribe('recipes');
	});
});

//helpers
Template.Recipes.helpers({
	recipes: ()=> {
		//All the recipes
		return Recipes.find({});
	}
});