const coachCtrl = {}
const Coach = require('../models/coach')
const multer = require('multer')
const path = require('path')


coachCtrl.renderAddCoach = (req, res) => {
    res.render('coachs/add-coach')
}

// coachCtrl.addCoach = async (req, res) => {
//     console.log(req.body)
//     const{ name, surname, ign, description, game, price} = req.body
//     const newCoach = new Coach({name, surname, ign, description, game, price})
//     await newCoach.save()
//     req.flash("success_msg", "Coach added to database");
//     res.render('coachs/new-coach', { name, surname, ign, description, game, price, messages: req.flash('success_msg') })
// }

coachCtrl.addCoach = async (req, res) => {

  const { name, surname, ign, description, game, price}  = req.body
  const img = req.file.originalname
  const coach = new Coach({
    name: name,
    surname: surname,
    ign: ign,
    description: description,
    game: game,
    price: price,
    img: req.file.originalname 
   })
   
   const newCoach = await coach.save()
   res.render('coachs/new-coach', { name, surname, ign, description, game, price, img })


//   saveImg(coach, req.body.img)
//   saveImglogo(coach, req.body.imglogo)

  // try {
  //   const newCoach = await coach.save()
  //   res.render('/coachs/new-coach', { name, surname, ign, description, game, price, img })
  // } catch {
  //   console.log('fail to upload')
  //   res.redirect('/addCoach')
  // }
}



coachCtrl.upload = async (req, res) => {
   console.log(req.file)
   console.log(req.file.originalname)
   const coach = new Coach({
    name: 'santip',
    surname: 'albpa',
    ign: 'manquitop',
    description: 'mancasoide barbaro',
    game: 'minecralul',
    price: '20',
    img: req.file.originalname
   })
   const newCoach = await coach.save()
   res.send('works')
}

coachCtrl.renderValorant = async (req, res) =>{
  const coach = await Coach.findOne({game: 'valorant'})
  res.render('coachs/valorant', {coach})
}

coachCtrl.renderLeague = async (req, res) =>{
  const array = []
  const coach = await Coach.findOne({game: 'league'})
  array.push(coach)
  res.render('coachs/league', {coachs: array})
}






// function saveImg(coach, imgEncoded) {
//   if (imgEncoded == null) return
//   const img = JSON.parse(imgEncoded)
//   if (img != null && imageMimeTypes.includes(img.type)) {
//     coach.img = new Buffer.from(img.data, 'base64')
//     coach.imgType = img.type
//   }
// }

// function saveImglogo(coach, imglogoEncoded) {
//   if (imglogoEncoded == null) return
//   const imglogo = JSON.parse(imglogoEncoded)
//   if (imglogo != null && imageMimeTypes.includes(imglogo.type)) {
//     coach.imglogo = new Buffer.from(imglogo.data, 'base64')
//     coach.imglogoType = imglogo.type
//   }
// }

module.exports = coachCtrl