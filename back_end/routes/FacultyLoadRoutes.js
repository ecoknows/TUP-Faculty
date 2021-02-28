import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import {generateToken, isAuth} from '../utils.js';
import FacultyLoadModel from '../models/FacultyLoadModel.js';
import facultyLoad from '../data/facultyLoad.js';

const facultyRoutes = express.Router();


facultyRoutes.get('/seed',    expressAsyncHandler(async(req,res)=>{
    await FacultyLoadModel.remove({});
    const createdSubjects = await FacultyLoadModel.insertMany(facultyLoad);
    res.send({ createdSubjects });
})
)
facultyRoutes.post(
    '/list',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const body = req.body;
      const result = await FacultyLoadModel.find({professor: body.professor})
      res.send(result);
    })
);
facultyRoutes.post('/list/sort', expressAsyncHandler(async(req,res)=>{
    const body = req.body;
    const sorted = await FacultyLoadModel.find({}).sort(body.sortKey);
    res.send(sorted)
  })
)
  



export default facultyRoutes;
