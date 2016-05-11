FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		//if user is not logged redirect to /home
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
		//if user is logged redirect to /recipe-book
			FlowRouter.go('recipe-book');
		}

		GAnalytics.pageview(); //google Analytics
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		GAnalytics.pageview(); //google Analytics
		BlazeLayout.render('MainLayout', {main: 'Recipes'})
	}
});

FlowRouter.route('/recipe/:_id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview(); //google Analytics
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'})
	}
});