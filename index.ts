import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/user.router";
import articleRouter from "./routers/article.router";
import roleRouter from "./routers/role.router";

// read the env file
dotenv.config();
const PORT = process.env.PORT || 8000;

// create app express
const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/article", articleRouter);
app.use("/role", roleRouter);

app.listen(PORT, () => {
    console.log("BLOG API RUNNING ", PORT);
});
