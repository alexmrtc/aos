const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(__dirname);
    res.render('index.html', { title: 'Age of Sigmar' });
});

router.get('/races', (req, res) => {
    console.log(__dirname);
    res.render('races.html', { title: 'Age of Sigmar: Races' });
});

module.exports = router;