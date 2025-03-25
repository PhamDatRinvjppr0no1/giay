const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send ('vao api mobile');
})

const mongoose = require('mongoose');

const giayModel = require('./giayModel');

const COMMON = require('./ketnoiMongodb');

router.get('/list', async (req, res) => {
    await mongoose.connect(COMMON.uri);

    let products = await giayModel.find();

    console.log(products);

    res.send(products);
})