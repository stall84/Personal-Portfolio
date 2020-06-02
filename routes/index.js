const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.render('index')
})

router.get('/2', (req,res,next) => {
    res.render('index2')
})




module.exports = router;