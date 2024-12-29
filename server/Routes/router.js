const express = require('express');
const router = new express.Router();

const multer = require('multer');
const cloudinary = require("../helper/cloudinaryconfig")
const userdt = require('../models/user');
const moment = require('moment');//date 

// router.get("/",(req,res)=>{
//     res.send("server router")
// })


// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

//img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
}else{
    callback(new Error("only image is allow"))
}
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})


//user register
router.post("/register",upload.single("photo"),async(req,res)=>{

    const upload = await cloudinary.uploader.upload(req.file.path);
    const {name} = req.body;
    try{
        const date = moment(new Date()).format("YYYY-MM-DD");
        const userdata = new userdt({
            name:name,
            imgpath:upload.secure_url,
            date:date
        });
        console.log(userdata)
        await userdata.save();
        
        if (!userdata) {
          return res.status(400).json({ error: 'File is required' });
        }
    
        res.status(200).json({ message: 'Successfully registered', name, file });
        console.log(userdata)

    }catch(error){
        res.status(500).json({ error: error.message });
    }  
    
});

//user data get
router.get("/getdata",async(req,res)=>{
    try{
        const getUser = await userdt.find();
        res.status(200).json(getUser);
        console.log(getUser)
    }catch(error){
        console.log(error)
    }
})

module.exports = router;