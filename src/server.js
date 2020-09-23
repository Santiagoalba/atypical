const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('./config/passport')
const methodOverride = require('method-override')
const multer = require('multer')



// Settings
app.set('port' , process.env.PORT || 4000)
app.set('views' , path.join( __dirname, 'views'))
// Handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
    
}))

const storage = multer.diskStorage({
    destination: path.join(__dirname, '/public/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})

// app.use(multer({
//     storage,
// }).single('imagen'))
app.use(multer({
   storage,
}).single('img'))

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    res.locals.user = req.user || null;
    next();
  });

app.set('view engine', 'hbs')
// Public
app.use(express.static(path.join(__dirname, 'public')))
// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/users.routes'))
app.use(require('./routes/coachs.routes'))



module.exports = app