import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    id_number:{type: String, required: true},

    username: {type: String, required: true},
    password: {type: String, required: true},

    name: {type: String, required: true},
    department: {type: String, required: true},

    is_admin: {type: Boolean, required: true},

    
    date_time_in: {type: String},
    time_in: {type: String},
    time_out: {type: String},



},{timestamps: true})

userSchema.index({'$**': 'text'});
export default mongoose.model('User', userSchema);