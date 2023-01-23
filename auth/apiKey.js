const key= require('../config/apiKey');
const apikey = async(req,res,next)=>{
    
    try {
        if(!req.params.key){
            return res.status(403).send({sucess:false,msg:"Please provide api key"})
        }else{
            if(key.API_KEY == req.params.key){
                next();
             }else{
                return res.status(403).send({sucess:false,msg:"Incorrect api key."})
             }
        }
    } catch (e) {
        return res.status(403).send({sucess:false,msg:e.message})
    }
  
}

module.exports = apikey;