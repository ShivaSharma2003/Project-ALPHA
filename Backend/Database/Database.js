import mongoose from 'mongoose'


export const databaseConnection = async () => {
    mongoose.connect(process.env.DB_URL, await console.log("Database connection established"))
}