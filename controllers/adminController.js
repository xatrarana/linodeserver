const adminSchema = require('../models/adminModel');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../auth/jwtAuth');




const login = async (req,res)=>{
    let {email,password}=req.body;
    let ExistingUser;
    try {
        ExistingUser = await adminSchema.findOne({email});
        if(!ExistingUser){
            return res.status(403).send({sucess:false,msg:"Acess denied!"})
        }
        else{
            let isPassCorrect =  bcrypt.compareSync(password,ExistingUser.password);
            if(!isPassCorrect){
                res.status(200).send({sucess:false,msg:"Incorrect credentials."})
            }else{
                let token = generateToken(ExistingUser.email);
                res.status(200).send({sucess:true,data:token});
            }
        }
    } catch (e) {
        return res.status(404).send({sucess:false,msg:e.message});
    }
}


module.exports = {login}