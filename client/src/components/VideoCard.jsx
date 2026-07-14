import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {

    const navigate = useNavigate();

    return (

        <div
            className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
        >

            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">

                <h2 className="text-xl font-bold">

                    {video.title}

                </h2>

                <p className="text-gray-600 mt-2">

                    {video.description}

                </p>

                <button

                    onClick={() => navigate(`/watch/${video._id}`)}

                    className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"

                >

                    Watch Video

                </button>

            </div>

        </div>

    );

}