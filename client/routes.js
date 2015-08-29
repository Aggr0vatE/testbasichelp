Router.route('/', function () {
  Router.go('home')
});

Router.route('/about');
Router.route('/contact');
Router.route('/home');
Router.route('/services');
AccountsTemplates.configureRoute('signIn', {
	name: 'login'
});

Router.route('/map', {
	name: 'map',
	template: 'map',
	onBeforeAction: function () {
	  var currentUser = Meteor.userId();
	  if (currentUser) {
	    this.next();
	  } else {
	    this.render("login");
	  }
	}
});

Router.route('/report1', {
		name: 'report1',
	template: 'report1',
	onBeforeAction: function () {
	  var currentUser = Meteor.userId();
	  if (currentUser) {
	    this.next();
	  } else {
	    this.render("login");
	  }
	}
});

Router.route('/jobs', {
		name: 'jobs',
	template: 'jobs',
	onBeforeAction: function () {
	  var currentUser = Meteor.userId();
	  if (currentUser) {
	    this.next();
	  } else {
	    this.render("login");
	  }
	}
});

Router.route('/account', {
	name: 'account',
	template: 'account',
	onBeforeAction: function () {
	  var currentUser = Meteor.userId();
	  if (currentUser) {
	    this.next();
	  } else {
	    this.render("login");
	  }
	}
});