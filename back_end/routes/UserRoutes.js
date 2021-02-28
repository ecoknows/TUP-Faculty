import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import {generateToken, isAdmin, isAuth} from '../utils.js';
import user from '../data/user.js';

const userRoutes = express.Router();

const respondSend =(user, res)=>{
    res.send({
        username: user.username,
        password: user.password,
        is_admin: user.is_admin,
        token: generateToken(user),
    });
}

userRoutes.get('/seed',    expressAsyncHandler(async(req,res)=>{
    await UserModel.remove({});
    const createdUsers = await UserModel.insertMany(user);
    res.send({ createdUsers });
})
)



userRoutes.post('/users/sort', expressAsyncHandler(async(req,res)=>{
    const body = req.body;
    const sorted = await UserModel.find({}).sort(body.sortKey);
    res.send(sorted)
  })
)

userRoutes.get(
    '/users',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const result = await UserModel.find({})
      res.send(result);
    })
);
  

userRoutes.post('/login',    expressAsyncHandler(async(req,res)=>{
        const user = await UserModel.findOne({ username: req.body.username });
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                console.log(user);
                res.send({
                    _id: user._id,
                    username: user.username,
                    password: user.password,

                    id_number:user.id_number,

                    name: user.name,
                    department: user.department,
                    
                    date_time_in: user.date_time_in,
                    time_in: user.time_in,
                    time_out: user.time_out,

                    is_admin: user.is_admin,
                    token: generateToken(user),
                });
            }
        }else{    
            res.status(401).send({ message: 'Invalid email or password' });   
        }
    })
)


export default userRoutes;