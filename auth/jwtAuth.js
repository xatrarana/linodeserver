const jsonwebtoken = require('jsonwebtoken');
const config = require('../config/config');


const generateToken = (email)=>{
    return jsonwebtoken.sign({email},config.key);
}

const verifyToken = (token) => {
    return jsonwebtoken.verify(token,config.key);
}


module.exports = {generateToken,verifyToken}