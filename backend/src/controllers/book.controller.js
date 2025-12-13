import Book from "../models/book.model.js";
import cloudinary from "../config/config.cloudinary.js";
import fs from "fs";

export const createBook = async (req, res, next) => {
  try {
    // 🔍 Debug (remove later)
    console.log(req.body);
    console.log(req.file);

    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required" });
    }

    // ☁️ Upload to Cloudinary
    const coverUpload = await cloudinary.uploader.upload(
      req.file.path,
      {
        folder: "library/coverImages",
      }
    );

    // 📘 Save to DB
    const book = await Book.create({
      bookId: "BK-" + Date.now(),
      ...req.body,
      coverImage: {
        public_id: coverUpload.public_id,
        url: coverUpload.secure_url,
      },
    });

    // 🧹 Remove temp file
    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      book,
    });
  } catch (error) {
    next(error);
  }
};
