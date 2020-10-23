const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Please log in');
  res.redirect('/');
};

helpers.isAdministrator = (req, res, next) => {
  if(req.user){
    if (req.user.isAdmin == true & req.isAuthenticated()) {
      return next();
    }
  }
  req.flash('error_msg', 'You are not an administrator');
  res.redirect('/');
};

module.exports = helpers;
