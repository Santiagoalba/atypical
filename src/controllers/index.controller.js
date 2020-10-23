const indexCtrl = {};
const Coach = require('../models/coach')
const Sub = require('../models/sub')

indexCtrl.renderIndex = async (req, res) => {
  // Find username to send to the view
 const username = searchUser(req.user)
 const admin = isAdmin(req.user)
  // Find coachs to render in the coachs section
  await Coach.find().limit(3)
  .then(documentos => {
    const contexto = {
        coachs: documentos.map(documento => {
        return {
            name: documento.name,
            surname: documento.surname,
            ign: documento.ign,
            description: documento.description,
            game: documento.game,
            price: documento.price,
            img: documento.img,
        }
      })
    }
    
    res.render('index', {
coachs: contexto.coachs, username, admin}) 
  })
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.subscribeNewsletter = (req, res) => {
  const subscriber = new Sub ({
    email: req.body.email
  })

  const newSub = subscriber.save()
  req.flash('success_msg', 'Subscribed to newsletter!!!')
  res.redirect('/')
}

searchUser = (search) => {
  if(search){
    return username = search.name        
  } 
    return username = null
  }

isAdmin = (user) => {
  if (user){
    console.log('en la funcion')
    return user.isAdmin
  } else {
    return null
  }
} 

 


module.exports = indexCtrl;