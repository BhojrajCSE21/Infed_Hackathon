import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import configs from "./configs.js";
import router from "./Routes/user-routes.js";
import routerss from "./Routes/teacher-routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/login/user", router);
app.use("/teacher", routerss);


const mongoURI = configs.mongoURI;

mongoose
  .connect(mongoURI)
  .then(() => app.listen(5500))
  .then(() => console.log("connected to db at port 5500 :)"))
  .catch((err) => console.log(`${err} is error`));