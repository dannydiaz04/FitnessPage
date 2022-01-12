const express = require('express');
const router = express.Router();
const main = require('../controllers/main')
const catchAsync = require('../utils/catchAsync');


router.route('/main')
    .get(catchAsync(main.index));

router.get('/main/fat_loss', catchAsync(main.fat_loss_page));

router.get('/main/workouts', catchAsync(main.workouts_page));

module.exports = router;