Router.route('/', function () {
  this.render('index.html');
});

Router.route('/map');
Router.route('/about');
Router.route('/contact');
Router.route('/home');
Router.route('/services');
Router.route('/report1');
Router.route('/jobs');
Router.route('/account');

// we want to be sure that the user is logging in
// for all routes but login
Router.route('/login',
              { name: 'login' });

var requireLogin = function(){
  if (! Meteor.user() ) {
    this.redirect('login');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {except: ['login']});