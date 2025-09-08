import mongoose from "mongoose";

mongoose.Schema({
    title:{
        name: String,
        require: true,
    },
    author:{
        type: String,
        require: true
    },
    publishYear:{
        type: Number,
        require: true,
    },
});

export const book = mongoose.model('bookSchema', { name: String });