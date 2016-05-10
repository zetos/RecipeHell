FlowRouter.route('/', {
	name: 'home',
	action() {
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