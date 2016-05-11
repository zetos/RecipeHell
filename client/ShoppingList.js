//tie the subscription to the template instead of the route.
Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		//get all recipes from this user (publish.js)
		self.subscribe('recipes');
	});
});

//helpers
Template.ShoppingList.helpers({
	shoppingList: ()=> {
		//return recipes that are in menu (have inMenu: true)
		return Recipes.find({inMenu: true});
	}
});