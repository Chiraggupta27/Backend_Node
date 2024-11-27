import express from 'express';
import router from './router/routes.js';
import bodyParser from 'body-parser';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
    console.log("listening on port 3000")
})