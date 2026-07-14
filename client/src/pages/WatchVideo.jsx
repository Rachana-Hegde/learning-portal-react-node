import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../services/api";

import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import BookmarkModal from "../components/BookmarkModal";
import BookmarkList from "../components/BookmarkList";
import ProgressBar from "../components/ProgressBar";

export default function WatchVideo() {

    const { id } = useParams();

    const [video, setVideo] = useState(null);

    const [bookmarks, setBookmarks] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);

    const [duration, setDuration] = useState(0);

    const [resumeTime, setResumeTime] = useState(0);

    const [pendingBookmarkTime, setPendingBookmarkTime] = useState(0);

    const [watermarkTime, setWatermarkTime] = useState("");

    /* ---------------------- Load Video ---------------------- */

    useEffect(() => {

        loadVideo();

        loadBookmarks();

        /* ---------------------- Recently Watched ---------------------- */

const recentVideos = JSON.parse(
    localStorage.getItem("recentVideos")
) || [];

const filtered = recentVideos.filter(
    (videoId) => videoId !== id
);

filtered.unshift(id);

// Keep only latest 5 videos

localStorage.setItem(
    "recentVideos",
    JSON.stringify(filtered.slice(0, 5))
);

        const savedTime = localStorage.getItem(`progress-${id}`);

        if (savedTime) {

            setResumeTime(Number(savedTime));

        }

    }, [id]);

    const loadVideo = async () => {

        try {

            const res = await API.get(`/videos/${id}`);

            setVideo(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    /* ---------------------- Load Bookmarks ---------------------- */

    const loadBookmarks = async () => {

        try {

            const res = await API.get(`/bookmark/${id}`);

            setBookmarks(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    /* ---------------------- Progress ---------------------- */

    const handleProgress = (playedSeconds) => {

        setCurrentTime(playedSeconds);

    };

    /* Save progress every 5 seconds */

    useEffect(() => {

        const interval = setInterval(() => {

            localStorage.setItem(

                `progress-${id}`,

                currentTime

            );

        }, 5000);

        return () => clearInterval(interval);

    }, [currentTime, id]);

    /* ---------------------- Duration ---------------------- */

    const handleDuration = (seconds) => {

        setDuration(seconds);

    };

    /* ---------------------- Add Bookmark ---------------------- */

    const openBookmarkModal = (time) => {

        setPendingBookmarkTime(time);

        setShowModal(true);

    };

    const saveBookmark = async (bookmark) => {

        try {

            await API.post("/bookmark", {

                videoId: id,

                bookmarkName: bookmark.bookmarkName,

                timestamp: bookmark.timestamp

            });

            loadBookmarks();

        }

        catch (err) {

            console.log(err);

        }

    };

    /* ---------------------- Seek ---------------------- */

    const handleSeek = (seconds) => {

        setResumeTime(seconds);

    };

    /* ---------------------- Delete Bookmark ---------------------- */

    const deleteBookmark = async (bookmarkId) => {

        try {

            await API.delete(`/bookmark/${bookmarkId}`);

            loadBookmarks();

        }

        catch (err) {

            console.log(err);

        }

    };

    /* ---------------------- Edit Bookmark ---------------------- */

const editBookmark = async (bookmark) => {

    const newName = prompt(
        "Enter new bookmark name",
        bookmark.bookmarkName
    );

    if (!newName) return;

    try {

        await API.put(`/bookmark/${bookmark._id}`, {

            bookmarkName: newName

        });

        loadBookmarks();

    }

    catch (err) {

        console.log(err);

        alert("Failed to update bookmark");

    }

};

    /* ---------------------- Screenshot Protection ---------------------- */

    useEffect(() => {

        const disableRightClick = (e) => {

            e.preventDefault();

        };

        document.addEventListener("contextmenu", disableRightClick);

        return () => {

            document.removeEventListener("contextmenu", disableRightClick);

        };

    }, []);

    useEffect(() => {

    document.body.style.userSelect = "none";

    return () => {

        document.body.style.userSelect = "auto";

    };

}, []);

useEffect(() => {

    const preventDrag = (e) => {

        e.preventDefault();

    };

    document.addEventListener("dragstart", preventDrag);

    return () => {

        document.removeEventListener("dragstart", preventDrag);

    };

}, []);

useEffect(() => {

    const copyHandler = (e) => {

        e.preventDefault();

    };

    document.addEventListener("copy", copyHandler);

    return () => {

        document.removeEventListener("copy", copyHandler);

    };

}, []);

useEffect(() => {

    const cutHandler = (e) => {

        e.preventDefault();

    };

    document.addEventListener("cut", cutHandler);

    return () => {

        document.removeEventListener("cut", cutHandler);

    };

}, []);

useEffect(() => {

    const pasteHandler = (e) => {

        e.preventDefault();

    };

    document.addEventListener("paste", pasteHandler);

    return () => {

        document.removeEventListener("paste", pasteHandler);

    };

}, []);

    /* Blur when tab is inactive */

    useEffect(() => {

        const handleVisibility = () => {

            const player = document.getElementById("videoContainer");

            if (!player) return;

            if (document.hidden) {

                player.style.filter = "blur(15px)";

            }

            else {

                player.style.filter = "none";

            }

        };

        document.addEventListener(

            "visibilitychange",

            handleVisibility

        );

        return () =>

            document.removeEventListener(

                "visibilitychange",

                handleVisibility

            );

    }, []);

    /* ---------------------- Watermark ---------------------- */

    useEffect(() => {

        const interval = setInterval(() => {

            setWatermarkTime(

                new Date().toLocaleString()

            );

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    if (!video) {

        return (

            <div className="text-center mt-20 text-2xl">

                Loading Video...

            </div>

        );

    }
        return (

        <>

            <Navbar />

            <div className="p-6 bg-gray-100 min-h-screen">

                <h1 className="text-3xl font-bold mb-6">

                    {video.title}

                </h1>

                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Left Side */}

                    <div className="lg:col-span-2">

                        <div
                            id="videoContainer"
                            className="relative rounded-xl overflow-hidden"
                        >

                            {/* Dynamic Watermark */}

                            <div
                                className="absolute top-4 left-4 z-20
                                bg-black/50 text-white
                                px-3 py-2 rounded-lg
                                text-sm"
                            >

                                Learning Portal
                                <br />

                                {watermarkTime}

                            </div>

                            <VideoPlayer

                                videoUrl={video.videoUrl}

                                initialTime={resumeTime}

                                onProgress={handleProgress}

                                onDuration={handleDuration}

                                onBookmark={openBookmarkModal}

                            />

                        </div>

                        <ProgressBar

                            currentTime={currentTime}

                            duration={duration}

                        />

                        <div className="bg-white rounded-xl shadow mt-6 p-5">

                            <h2 className="text-2xl font-bold mb-3">

                                Description

                            </h2>

                            <p className="text-gray-700 leading-7">

                                {video.description}

                            </p>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <BookmarkList

    bookmarks={bookmarks}

    onSeek={handleSeek}

    onEdit={editBookmark}

    onDelete={deleteBookmark}

/>

                    </div>

                </div>

            </div>

            <BookmarkModal

                isOpen={showModal}

                onClose={() => setShowModal(false)}

                currentTime={pendingBookmarkTime}

                onSave={saveBookmark}

            />

        </>

    );

}