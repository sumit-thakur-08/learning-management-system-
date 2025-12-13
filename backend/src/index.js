import { app } from "./app.js";
import connectDB from "./config/config.db.js";
import dotenv from "dotenv";


dotenv.config({
    path: './.env' // Providing env variables in all files immidiately
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("Mongo DB connection failed !!!", error);
    })