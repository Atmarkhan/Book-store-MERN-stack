import express, { request } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import cors from "cors";
import booksRoute from "./routes/bookRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`APP is Listening to Port: ${PORT}`);
    });
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
