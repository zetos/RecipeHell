//tie the subscription to the template instead of the route.
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		//get all recipes from this user (publish.js)
		self.subscribe('recipes');
	});
});

//events
Template.Recipes.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
});


//helpers
Template.Recipes.helpers({
	recipes: ()=> {
		//All the recipes
		return Recipes.find({});
	},
	newRecipe: ()=> {
		return Session.get('newRecipe');
	}
});