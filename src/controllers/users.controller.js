const userCtrl = {}
const User = require('../models/User')
const passport = require('passport')

userCtrl.signup = async (req, res) => {  
  
console.log(req.body, 'si señores')
let errors = [];
  const { name, email, password, password2 } = req.body;
  const nameRegExp = /^([a-zA-Z0-9])+$/
  // const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,14}$/
  if(!(nameRegExp.test(name))){
    errors.push({text: "Username must be 4-13 alphanumeric characters"})
  }
  if(password.length < 7) {
    errors.push({ text: "Password should be 7 characters or more"})
  }
  // if (!(passRegExp.test(password))){
  //   errors.push({text: "Password must be 7-14 characters long, have 1 upper,lower, and numeric character"})
  // }
  if (password != password2) {
    errors.push({ text: "Passwords do not match." });
  }
  if (errors.length > 0) {
    
    res.render("index", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
        req.flash("error_msg", "The Email is already in use.");
        res.redirect("/");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', "Registered successfully")
      res.redirect("/");
    }
  }
};

userCtrl.login = passport.authenticate('local', {
  failureRedirect: '/' ,
  successRedirect: '/',
  failureFlash: true,
  successFlash: true
  
})

userCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/");
};

userCtrl.renderMyInfo = (req, res) => {
  const username = searchUser(req.user)
  const {email} = req.user
  res.render('users/my-info', {username, email} )
}

userCtrl.deleteAcc = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "User Deleted Successfully");
  res.redirect("/");
};

userCtrl.renderUpdateAcc = async (req, res) => {
  const username = req.user.name
  res.render('users/update-acc', {username})
}

userCtrl.updateAcc = async (req, res) => {
  const username = req.user.name
  const {name, email} = req.body
  const errors = [];
  if (!name) {
    errors.push({ text: "Please Write a name." });
  }
  if (!email) {
    errors.push({ text: "Please Write an email" });
  }
  if (errors.length > 0) {
    res.render("users/update-acc", {
      errors,
      name,
      email,
      username,
    })
  }else{   
    await User.findOneAndUpdate(req.params.id, {name, email})
    req.flash("success_msg", "User Updated Successfully")
    res.redirect('/my-info')
}
}


searchUser = (search) => {
  if(search){
    return username = search.name
  }
    return username = null
  }

module.exports = userCtrl