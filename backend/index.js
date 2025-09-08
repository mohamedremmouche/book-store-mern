import express, { request, response } from "express"
import mongoose from "mongoose";
import {PORT, booksStoreDBURL} from "./config.js"
import { Book } from "./models/bookModel.js";
import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
//Option1: Allow all origins with default of cors(*)
app.use(cors());

app.get("/", (request, response) => {
    console.log(request.body)
    return response.status(200).send('Salam Alikoum')})

app.post("/", (request, response) => {
    console.log(request.body)
        return response.status(200).send('oualikoum salam')})
    
    
        //route for save a new book
    app.post("/books", async (request, response) => {
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({meassage: "Send all required fields: title, author, publishYear"})
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear : request.body.publishYear,
        }
        const book = await Book.create(newBook);
        return response.status(201).send(book);
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

