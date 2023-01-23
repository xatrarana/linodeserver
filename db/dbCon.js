const mongoose = require('mongoose');

const dbCon = async ()=>{
    try {
        mongoose.set('strictQuery', false);
        return (mongoose.connect('mongodb+srv://wolfie:8C6MsWAVq5o9VnFr@xatraapi.dy6eizo.mongodb.net/xatraapi?retryWrites=true&w=majority'));
    } catch (e) {
        console.log(e.message);
    }
}


module.exports = dbCon;