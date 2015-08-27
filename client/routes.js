Router.route('/', function () {
  this.render('index.html');
});

Router.route('/map');
Router.route('/about');
Router.route('/contact');
Router.route('/home');
Router.route('/services');
Router.route('/reports');
Router.route('/jobs');
Router.route('/account');

AccountsTemplates.configureRoute('signIn');

// we want to be sure that the user is logging in
// for all routes but login
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        this.next();
    } else {
        // required by Iron to process the route handler
        this.redirect('/map');
        this.next();
    }
});