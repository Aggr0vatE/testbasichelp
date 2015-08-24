Router.route('/', function () {
  this.render('index.html');
});

Router.route('/about');
Router.route('/contact');
Router.route('/home');
Router.route('/services');

AccountsTemplates.configureRoute('signIn');