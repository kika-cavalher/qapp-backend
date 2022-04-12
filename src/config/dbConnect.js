import mongoose from "mongoose"

mongoose.connect("mongodb+srv://qapp:123@qapp.8mins.mongodb.net/qapp-db");

let db = mongoose.connection;

export default db;