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

userRoutes.post('/users/search', expressAsyncHandler(async(req,res)=>{
    const body = req.body;
    const search = await UserModel.find({ $text: { $search: body.search } });
    res.send(search)
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
            }else{
                res.status(401).send({ message: 'Invalid email or password' });   
            }
        }else{    
            res.status(401).send({ message: 'Invalid email or password' });   
        }
    })
)


userRoutes.put('/user/update_time/:id',   expressAsyncHandler(async(req,res)=>{
    const userId = req.params.id;
    const time_in = req.query.time_in;
    const user = await UserModel.findById(userId);
    const locale = 'en';

    if(user){
        const current_date = new Date();
        if(time_in == 'time_in')
            user.time_in = current_date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
        else{
            user.time_out = current_date.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
        }
        const date = `${current_date.toLocaleDateString(locale, { month: 'long' })}, ${current_date.getDate()} ${current_date.getFullYear()}\n\n`;
        user.date_time_in =  date;
        const userUpdated = await user.save();
        res.send({ message: 'User Updated', userUpdated });
    }else{    
        res.status(401).send({ message: 'Invalid USER ID' });   
    }

})
)


export default userRoutes;