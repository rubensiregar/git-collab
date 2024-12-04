import { Router } from "express";
import {
    postRole,
    deleteRole,
    getRole,
    patchRole,
} from "../controllers/role.controller";
// silakan import yg lain
//
//
const route = Router();

// di sini kumpulan router
route.post("/", postRole);
route.get("/", getRole);
route.patch("/:id", patchRole);
route.delete("/:id", deleteRole);

export default route;
