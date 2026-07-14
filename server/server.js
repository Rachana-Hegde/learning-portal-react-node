import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/videos", videoRoutes);

app.use("/api/bookmark", bookmarkRoutes);

app.get("/", (req, res) => {

    res.json({

        message: "Learning Portal Backend Running"

    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});