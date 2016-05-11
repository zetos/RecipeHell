if (Meteor.isClient) {
	//gwendall:auth-client-callbacks packge stuff
	//this code only work on client side
    //check for login/logout
    Accounts.onLogin(function() {
        //redirect user on login
        FlowRouter.go('recipe-book');
    });

    Accounts.onLogout(function() {
        //redirect user on logout
        FlowRouter.go('home');
    });
};


//triggers
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		//if user is not logged redirect to /home
		FlowRouter.go('home');
	}
}]);

//routes
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

FlowRouter.route('/menu',{
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list',{
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});