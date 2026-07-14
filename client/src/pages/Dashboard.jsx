import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import API from "../services/api";

export default function Dashboard() {

    const [videos, setVideos] = useState([]);

    const [recentVideos, setRecentVideos] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadVideos();

    }, []);

    const loadVideos = async () => {

        try {

            const res = await API.get("/videos");

            setVideos(res.data);

            loadRecentlyWatched(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    /* -------------------- Recently Watched -------------------- */

    const loadRecentlyWatched = (allVideos) => {

        const recentIds = JSON.parse(

            localStorage.getItem("recentVideos")

        ) || [];

        const recent = recentIds

            .map(id => allVideos.find(video => video._id === id))

            .filter(Boolean);

        setRecentVideos(recent);

    };

    /* -------------------- Search -------------------- */

    const filteredVideos = videos.filter(video =>

        video.title

            .toLowerCase()

            .includes(search.toLowerCase())

    );

    return (

        <>

            <Navbar />

            <div className="p-8">

                <h1 className="text-4xl font-bold mb-6">

                    Learning Videos

                </h1>

                <input

                    type="text"

                    placeholder="Search Videos..."

                    className="border p-3 rounded w-full mb-8"

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                />

                {/* ---------------- Recently Watched ---------------- */}

                {

                    recentVideos.length > 0 && (

                        <>

                            <h2 className="text-2xl font-bold mb-5">

                                Recently Watched

                            </h2>

                            <div className="grid md:grid-cols-3 gap-8 mb-10">

                                {

                                    recentVideos.map(video => (

                                        <VideoCard

                                            key={video._id}

                                            video={video}

                                        />

                                    ))

                                }

                            </div>

                        </>

                    )

                }

                {/* ---------------- All Videos ---------------- */}

                <h2 className="text-2xl font-bold mb-5">

                    All Videos

                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {

                        filteredVideos.map(video => (

                            <VideoCard

                                key={video._id}

                                video={video}

                            />

                        ))

                    }

                </div>

            </div>

        </>

    );

}