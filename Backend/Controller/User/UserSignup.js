import UserModel from '../../Schemas/UserSchema.js'

const SignupUser = (async (req, res) => {
    const { username, name, email, password } = req.body

    if (username === "", name === "", email === "", password === "") {
        res.status(403).json({ message: "Invalid request" })
    } else {
        try {
            const emailAlreadyExist = await UserModel.findOne({ email: email, username: username })
            if (emailAlreadyExist) {
                res.status(403).json({ message: "email or username already exists" })
            } else {
                const registeredUser = await UserModel.create(
                    {
                        username: username,
                        name: name,
                        email: email,
                        password: password
                    }
                )

                if (registeredUser) {
                    res.status(200).json({ message: "user successfully created", registeredUser })
                }
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
            console.log(error)
        }
    }
})

export default SignupUser