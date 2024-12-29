const mongoose = require('mongoose');
URL=process.env.DATABASE;


const connect = () => {
    try {
        const respone = mongoose.connect(URL);
        console.log("Database connect");
        
        
    } catch (error) {
       console.log(error);
        
    }

}

module.exports = connect;