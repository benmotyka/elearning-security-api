import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: 'This user is already registered'
    },
    password: {
        type: String,
        required: true
    },
})

export default mongoose.model('User', userSchema);
