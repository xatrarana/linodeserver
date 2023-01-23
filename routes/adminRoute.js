const express = require('express');
const adminRoute = express();
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

const { login } = require('../controllers/adminController');

const publicPath = path.join(__dirname,'../public');
adminRoute.use(cors());
adminRoute.use(bodyParser.json());
adminRoute.use(bodyParser.urlencoded({extended:true}));
adminRoute.use(express.static(publicPath));


adminRoute.get('/',(req,res)=>{
    try {
        res.status(200).send({sucess:true,msg:"Welcome to wolfies server"});
    } catch (e) {
        res.status(500).send({sucess:true,msg:e.message});
    }
})
adminRoute.post('/login',login);

module.exports = adminRoute;