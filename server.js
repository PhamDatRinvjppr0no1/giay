const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const COMMON = require('./ketnoiMongodb');

const uri = COMMON.uri;

const mongoose = require('mongoose');

const giayModel = require('./giayModel');

const apiMobile = require('./api');
app.use('/api', apiMobile);

app.get('/', async (req, res) => {
    await mongoose.connect(uri);

    let products = await giayModel.find();

    console.log(products);

    res.send(products);

})

// app.post('/add_xe', async (req, res) => {
//     await mongoose.connect(uri);

    

//     let car = req.body;

//     console.log(car)

//     let kq = await carModel.create(car);
//     console.log(kq);

//     let cars = await carModel.find();

//     res.send(cars);

// })

// app.get('/xoa/:id', async (req, res) => {
//     await mongoose.connect(uri);

//     let id = req.params.id;
//     console.log(id);

//     // xu ly loi khi id khong dung
//     await carModel.deleteOne({_id: id});

//     res.redirect('../')
// }) 

// app.get('/update/:ten', async (req, res) => {
//     await mongoose.connect(uri);

//     console.log('Ket noi DB thanh cong');

//     let tenXe = req.params.ten;
//     console.log(tenXe);

//     let tenXeMoi = tenXe + ' Phien ban moi 2024';

//     await carModel.updateOne({ten: tenXe}, {ten: tenXeMoi});

//     let xehois = await carModel.find({});

//     res.send(xehois);
// })