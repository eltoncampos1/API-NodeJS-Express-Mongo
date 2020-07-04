const express = require('express');
const auhtMidleware = require('../midllewares/auth');


const router = express.Router();

router.use(auhtMidleware);

router.get('/', ( req, res) => {
    res.send({ok : true, user: req.userID })
})

module.exports = app => app.use('/projects', router);   