import express, { response } from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from './routes/bookRoutes.js';

const app = express();

// Middleware to parse request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Book store');
});

app.use('/books/', booksRoutes);

mongoose
    .connect(MONGODBURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });