import mongoose from 'mongoose';
import { Str } from 'prelude-ls';
import { boolean } from 'yargs';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    distance:{
        type: String,
        required: true,
    },
    photos:{
        type: [String],
    },
    desc:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    rooms:{
        type: [String]
    },
    cheapestPrice:{
        type: Number,
        required: true,
    },
    featured:{
        type: Boolean,
        required: false
    },
});

export default mongoose.model("Hotel", HotelSchema);