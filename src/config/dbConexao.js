import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(`${process.env.DB_URL}`)

let db = mongoose.connection

export default db