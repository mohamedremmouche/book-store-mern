import express, { response } from "express"
import mongoose from "mongoose";
import {PORT, booksStoreDBURL} from "./config.js"

const app = express();

app.get("/", (req, res) => {
    
    return res.status(234).send('Salam Alikoum')})
    



mongoose.connect(booksStoreDBURL).then(() => {
    console.log("DataBase Connected")
    app.listen(PORT, () => `App is listening to port: ${PORT}`)

}).catch(error => console.log(error))

