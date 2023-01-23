const express = require('express');
const dbCon = require('../db/dbCon');
const adminRoute = require('../routes/adminRoute');
const port = process.env.PORT || 9999;
const app = express();
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '../db');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});
const auth = require('../auth/apiKey');
app.use('/api/:key',auth,adminRoute);
app.use('*',(req,res)=>{
   try {
    res.status(404).send({Sucess:false,msg:"Page couldn't find"});
   } catch (e) {
    res.status(500).send({sucess:false,msg:e.message});
   }
})
const start = async () => {
        try{    
                await dbCon();
                console.log("Database connected");
                app.listen(port,()=>{console.log(`Server is running at http://localhost:${port}`);
        });
        }catch(e){
                console.log(e.message);
        }
}

start();