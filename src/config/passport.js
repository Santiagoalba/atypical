const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/User')

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
}, async (name, password, done) => {
   const user = await User.findOne({name})
   if (!user) {
       //Done tiene 3 params, ERROR, usuario , opciones
       return done(null, false, {message: 'User not found'})
   } else {
       const match = await user.matchPassword(password)
       if (match) {
           return done(null, user, {message: 'Logged in'})
       } else { 
           return done(null, false, { message: 'Incorrect password'})
       }
   }
}))

passport.serializeUser((user, done) =>{
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) =>{
        done(err, user)
    })
})