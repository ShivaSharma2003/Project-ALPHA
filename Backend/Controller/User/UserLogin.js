import UserModel from "../../Schemas/UserSchema.js";

const UserLogin = (async (req, res) => {
    const { email, password } = req.body
    try {
        const emailExists = await UserModel.findOne({ email: email })
        if (emailExists) {
            if (await emailExists.comparePassword(password)) {
                res.status(200).send({ messsage: "successfully logged in" })
            } else {
                res.status(403).json({ message: "email or password is invalid" })
            }
        } else {
            res.status(404).json({ message: "User not found!!" })
        }

    } catch (error) {
        res.status(500).json({ message: "internal Server Error" })
        console.log(error)
    }
})

export default UserLogin