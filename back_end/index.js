import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes.js';
import facultyRoutes from './routes/FacultyLoadRoutes.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT  || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

// User
app.use('/api',userRoutes);
app.use('/api/facultyLoad',facultyRoutes);

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
},()=>{
    console.log("Database connected");
})


app.listen(PORT, ()=>{
    console.log(`TUP Server is Running at ${PORT}`);
})

