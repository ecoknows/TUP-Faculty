import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({

    professor:{type: String, required: true},

    course_code:{type: String , required: true},
    section:{type: String , required: true},
    subject_code:{type: String , required: true},

    day:{type: String , required: true},
    time_start:{type: String , required: true},
    time_end:{type: String , required: true},
    assigned_to  :{type: String , required: true},

    units: {type: Number, required: true},
    venue: {type: String, required: true},
    number_of_students: {type: Number, required: true},
    

},{timestamps: true})

export default mongoose.model('FacultyLoad', facultySchema);