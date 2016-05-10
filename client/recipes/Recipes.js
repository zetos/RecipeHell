Meteor.subscribe('recipes');

//helpers
Template.Recipes.helpers({
	recipes: ()=> {
		//All the recipes
		return Recipes.find({});
	}
});