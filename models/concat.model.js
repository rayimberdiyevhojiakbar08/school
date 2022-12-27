import {Schema, model} from 'mongoose';

const Schema_ = new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    subject:{type:String, required:true},
    comment:{type:String, required:true},
});

export default model('Concat', Schema_);
