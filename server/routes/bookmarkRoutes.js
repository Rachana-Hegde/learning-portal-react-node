import express from "express";

import auth from "../middleware/auth.js";

import {

    createBookmark,

    getBookmarks,

    deleteBookmark,

    updateBookmark

} from "../controllers/bookmarkController.js";

const router = express.Router();

/* Protected Routes */

router.post("/", auth, createBookmark);

router.get("/:videoId", auth, getBookmarks);

router.delete("/:id", auth, deleteBookmark);

router.put("/:id", auth, updateBookmark);

export default router;