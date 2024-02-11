import express, { response } from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from './routes/bookRoutes.js';
import cors from "cors";

const app = express();

// Middleware to parse request body
app.use(express.json());

// Middleware to handle CORS policy
// Option 1: Allow all origins with default of cors(*)
app.use(cors());

// Option 2: Allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeader: ['Content-Type'],
// }));

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