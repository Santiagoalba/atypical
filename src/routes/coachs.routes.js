const express = require('express')
const router = express.Router()

const { renderAddCoach,
        addCoach,
        renderValorant,
        renderLeague,
        renderSsb,
        renderRocketLeague,
        renderDota2,
        renderOverwatch,
        renderPubg,
        renderStarcraft,
        deletecoach,
        list,
        renderOurCoachs,
        pages
    
    } = require('../controllers/coachs.controller');

const { isAdministrator } = require('../helpers/auth');  

router.get('/addcoach' , isAdministrator, renderAddCoach);
router.post('/addcoach' , addCoach);
router.get('/coachlist', isAdministrator, list);
router.post('/coachlist', isAdministrator, pages);
router.delete('/deletecoach/:id', deletecoach);
router.get('/coachs/valorant', renderValorant);
router.get('/coachs/overwatch', renderOverwatch);
router.get('/coachs/league', renderLeague);
router.get('/coachs/ssb', renderSsb);
router.get('/coachs/Rocket-League', renderRocketLeague);
router.get('/coachs/dota2', renderDota2);
router.get('/coachs/starcraft', renderStarcraft);
router.get('/coachs/pubg', renderPubg);
router.get('/ourcoachs' , renderOurCoachs);




module.exports = router;