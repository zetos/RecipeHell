Meteor.publish('recipes', function(){
	//publish all recipes from this.user
	return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id){
	check(id, String); //check if "id" is a "String"

	return Recipes.find({_id: id}); //publish only one recipe
});