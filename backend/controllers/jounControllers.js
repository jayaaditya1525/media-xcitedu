const asyncHandler = require("express-async-handler");
const jounModel = require('../models/jounModel');


const jounRegister = asyncHandler((req,res,next) => {
    const {name,email,password,resume} = req.body;
    
    jounModel.findOne({email}).then((joun) => {
        if(!joun){
            jounModel.create({
                name,
                email,
                password,
                resume
            }).then((response) => {
                res.status(200).json({
                    success : true,
                    message : response
                })
            }).catch((error) => {
                console.log(`Error : ${error}`);
            })
        }else{
            res.status(400).json({
                success : false,
                message : "User Already Register"
            })
        }
    })
})

const getAllJoun = asyncHandler((req,res,next) => {
    
})




module.exports= jounRegister