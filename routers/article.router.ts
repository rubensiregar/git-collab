import { Router } from "express";
import { postArticle } from "../controllers/article.controller";
// silakan import yg lain
//
//
const route = Router();

// di sini kumpulan router
route.post("/", postArticle);
route.get("/");
route.get("/:id");
route.patch("/:id");
route.delete("/:id");

export default route;
