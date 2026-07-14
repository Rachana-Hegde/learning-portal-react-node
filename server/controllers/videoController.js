import Video from "../models/Video.js";

/* Get All Videos */

export const getAllVideos = async (req, res) => {

    try {

        const videos = await Video.find().sort({ createdAt: -1 });

        res.status(200).json(videos);

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

/* Get Video By ID */

export const getVideoById = async (req, res) => {

    try {

        const video = await Video.findById(req.params.id);

        if (!video) {

            return res.status(404).json({

                message: "Video Not Found"

            });

        }

        res.status(200).json(video);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};