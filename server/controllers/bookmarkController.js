import Bookmark from "../models/Bookmark.js";

/* ===========================================
   Create Bookmark
=========================================== */

export const createBookmark = async (req, res) => {

    try {

        const {

            videoId,

            bookmarkName,

            timestamp

        } = req.body;

        if (!videoId || timestamp === undefined) {

            return res.status(400).json({

                message: "Video ID and Timestamp are required"

            });

        }

        const bookmark = await Bookmark.create({

            userId: req.user._id,

            videoId,

            bookmarkName,

            timestamp

        });

        res.status(201).json(bookmark);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/* ===========================================
   Get Bookmarks of One Video
=========================================== */

export const getBookmarks = async (req, res) => {

    try {

        const bookmarks = await Bookmark.find({

            userId: req.user._id,

            videoId: req.params.videoId

        }).sort({

            timestamp: 1

        });

        res.status(200).json(bookmarks);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/* ===========================================
   Delete Bookmark
=========================================== */

export const deleteBookmark = async (req, res) => {

    try {

        const bookmark = await Bookmark.findOne({

            _id: req.params.id,

            userId: req.user._id

        });

        if (!bookmark) {

            return res.status(404).json({

                message: "Bookmark not found"

            });

        }

        await bookmark.deleteOne();

        res.status(200).json({

            message: "Bookmark deleted successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/* ===========================================
   Update Bookmark (Bonus Feature)
=========================================== */

export const updateBookmark = async (req, res) => {

    try {

        const { bookmarkName } = req.body;

        const bookmark = await Bookmark.findOne({

            _id: req.params.id,

            userId: req.user._id

        });

        if (!bookmark) {

            return res.status(404).json({

                message: "Bookmark not found"

            });

        }

        bookmark.bookmarkName = bookmarkName;

        await bookmark.save();

        res.status(200).json(bookmark);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};