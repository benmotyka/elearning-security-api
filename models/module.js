import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: true,
        unique: 'This index is already in use'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Module', moduleSchema);
