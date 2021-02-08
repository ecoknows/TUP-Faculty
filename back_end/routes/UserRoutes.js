import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils.js';

const userRoutes = express.Router();

const respondSend =(user, res)=>{
    res.send({
        username: user.username,
        password: user.password,
        is_admin: user.is_admin,
        token: generateToken(user),
    });
}

userRoutes.post('/login',
    expressAsyncHandler(async(req,res)=>{
        console.log(req.body);
        res.send(req.body);
    })
)

userRoutes.post('/register', 
    expressAsyncHandler(async (req,res)=>{
        const user = new UserModel({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            is_admin: req.body.is_admin,
        });
        const createdUser = await user.save();
        respondSend(createdUser,res);
    })
);;


export default userRoutes;