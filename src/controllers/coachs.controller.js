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

coachCtrl.list = async (req, res) =>{
  const coachs = await Coach.paginate({}, {lean: true, limit:10});
  console.log(coachs,'coaches papa');
  const next = coachs.hasNextPage;
  console.log(next,'coaches papa');
  const prev = coachs.hasPrevPage;
  const nextPage = coachs.nextPage;
  const prevPage = coachs.prevPage;
  coach = coachs.docs;
  // res.json(coach)   
  res.render('coachs/coachlist', {coach, next, prev, nextPage, prevPage})
}

coachCtrl.pages = async (req, res) => {
  const pageNumber = req.body.page;
  console.log(req.body, 'numero de pag')
  const coachs = await Coach.paginate({}, {lean: true, limit:10, page: pageNumber});
  const next = coachs.hasNextPage;
  const prev = coachs.hasPrevPage;
  const nextPage = coachs.nextPage;
  const prevPage = coachs.prevPage;
  coach = coachs.docs;
  res.render('coachs/coachlist', {coach, next, prev, nextPage, prevPage})
}

coachCtrl.deletecoach = async (req, res) =>{
  console.log(req.params.id)
  await Coach.findByIdAndDelete(req.params.id)
  req.flash('success_msg', 'Coach deleted successfully')
  res.redirect('/coachlist')
}


coachCtrl.renderValorant = async (req, res) =>{
  const coach = await Coach.find({game: 'Valorant'}).limit(10).lean()
  
  res.render('coachs/valorant', {coach})
}

coachCtrl.renderOverwatch = async (req, res) =>{
  const coach = await Coach.find({game: 'Overwatch'}).limit(10).lean()
  
  res.render('coachs/overwatch', {coach})
}

coachCtrl.renderSsb = async (req, res) =>{
  const coach = await Coach.find({game: 'Ssb'}).limit(10).lean()
  
  res.render('coachs/ssb', {coach})
}

coachCtrl.renderRocketLeague = async (req, res) =>{
  const coach = await Coach.find({game: 'Rocket League'}).limit(10).lean()
  
  res.render('coachs/rocket-league', {coach})
}

coachCtrl.renderDota2 = async (req, res) =>{
  const coach = await Coach.find({game: 'Dota 2'}).limit(10).lean()
  
  res.render('coachs/dota2', {coach})
}

coachCtrl.renderStarcraft = async (req, res) =>{
  const coach = await Coach.find({game: 'Starcraft'}).limit(10).lean()
  
  res.render('coachs/starcraft', {coach})
}

coachCtrl.renderPubg = async (req, res) =>{
  const coach = await Coach.find({game: 'Pubg'}).limit(10).lean()
  
  res.render('coachs/pubg', {coach})
}

coachCtrl.renderLeague = async (req, res) =>{
  const coach = await Coach.find({game: 'League'}).limit(10).lean()
  res.render('coachs/league', {coach})
}

coachCtrl.renderOurCoachs = async (req, res) => {
  const valorant_coach = await Coach.find({game: 'valorant'}).limit(3).lean()
  const rocketLeague_coach = await Coach.find({game: 'rocket league'}).limit(3).lean()
  const league_coach = await Coach.find({game: 'league'}).limit(3).lean()
  const starcraft_coach = await Coach.find({game: 'starcraft'}).limit(3).lean()
  const dota2_coach = await Coach.find({game: 'dota 2'}).limit(3).lean()
  const ssb_coach = await Coach.find({game: 'ssb'}).limit(3).lean()
  const overwatch_coach = await Coach.find({game: 'overwatch'}).limit(3).lean()
  const pubg_coach = await Coach.find({game: 'pubg'}).limit(3).lean()
  res.render('coachs/ourcoachs', { valorant_coach,
                                   rocketLeague_coach,
                                   league_coach,
                                   starcraft_coach,
                                   dota2_coach,
                                   ssb_coach,
                                   overwatch_coach,
                                   pubg_coach
                                  })
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