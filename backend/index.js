import express, { request, response } from "express"
import mongoose from "mongoose";
import {PORT, booksStoreDBURL} from "./config.js"
import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
    
    return res.status(200).send('Salam Alikoum')})

    //route for save a new book
    
app.post("/books", async (request, response) => {
    try{
        if(!request.body.title || !request.body.authoe || !request.body.publishYear){
            return response.status(400).send({meassage: "Send all required fields: title, author, publishYear"})
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear : request.body.publishYear,
        }
        const book = await Book.create(newBook);
        return reaponse.status(201).send(book);
    }catch(error){
        console.log(error)
        response.status(500).send({message: error.message})
    }
})
    



mongoose.connect(booksStoreDBURL)
.then(() => {
    console.log("DataBase Connected")
    app.listen(PORT, () => `App is listening to port: ${PORT}`)

})
.catch(error => console.log(error))

