import {Schema, model} from 'mongoose';

const Schema_ = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
});

export default model('register', Schema_);
