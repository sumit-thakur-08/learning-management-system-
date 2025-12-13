import express from "express";
import { createBook } from "../controllers/book.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const bookRoutes = express.Router();


bookRoutes.post(
  "/",
  upload.single("coverImage"),
  createBook
);  


export default bookRoutes;