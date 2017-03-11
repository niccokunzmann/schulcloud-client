const express = require('express');
const router = express.Router();

router.use(require('./login'));
router.use(require('./registration'));

router.use('/account/', require('./account'));
router.use('/calendar/', require('./calendar'));
router.use('/content/', require('./content'));
router.use('/courses/', require('./courses'));
router.use('/dashboard/', require('./dashboard'));
router.use('/files/', require('./files'));

router.use('/administration/', require('./administration'));


module.exports = router;