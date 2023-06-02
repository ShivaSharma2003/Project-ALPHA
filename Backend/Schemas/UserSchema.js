import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        email:
        {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        followers:
        {
            type: Array,
        },

        followings:
        {
            type: Array,
        },

        posts:
        {
            type: Array
        },

        bio:
        {
            type: String
        },

        profilePhoto:
        {
            type: String
        },
        verified:
        {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true
    }
)

UserSchema.pre("save", async function (next) {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
    next()
})

UserSchema.methods.comparePassword = async function(password)
{
    return await bcryptjs.compare(password , this.password)
}

const User = mongoose.model('User', UserSchema)

export default User;