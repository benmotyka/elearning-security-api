import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: 'This user is already registered'
    },
    emailVerified: {
        type: Boolean,
        required: true,
    },
    verificationToken: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

export default mongoose.model('User', userSchema);
