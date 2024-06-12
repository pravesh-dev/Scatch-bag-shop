const userModel = require('../models/users-model');
const  bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');

module.exports = async (req, res)=>{
    try{
        const {email, password, fullName} = req.body;

        let user = await userModel.findOne({email});
        if(user) return res.send('user already existed with this email');
        
        bcrypt.genSalt(10, (err, salt)=>{
            if(!err){
                bcrypt.hash(password, salt, async (err, hash)=>{
                    if(err){
                        return res.send(err.message);
                    }
                    else{
                        let user = await userModel.create({
                            email,
                            password: hash,
                            fullName
                        })
                        let token = generateToken(user);
                        res.cookie('token', token);
                        res.send('user created successfully')
                    }
                })
            }
        })
    }catch(err){
        res.send(err.message)
    }
}