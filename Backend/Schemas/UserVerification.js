import mongoose from 'mongoose'

const UserVerificationSchema = mongoose.Schema(
    {
        userId:
        {
            type: String,
            required: true
        },
        uniqueString:
        {
            type: String,
            required: true
        },
        createdAt:
        {
            type: Date,
            required: true
        },
        expiresAt:
        {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const UserVerification = mongoose.model("UserVerification", UserVerificationSchema)

export default UserVerification;