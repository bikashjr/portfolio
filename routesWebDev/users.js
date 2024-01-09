const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.render('users')
})
router.get('/lists', (req, res) => {
    res.render('users Lists')
})

module.exports = router;