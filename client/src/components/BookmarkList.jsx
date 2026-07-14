import { FaPlay, FaEdit, FaTrash } from "react-icons/fa";

export default function BookmarkList({
    bookmarks,
    onSeek,
    onEdit,
    onDelete
}) {

    const formatTime = (seconds) => {

        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);

        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
                .toString()
                .padStart(2, "0")}`;
        }

        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    if (!bookmarks || bookmarks.length === 0) {

        return (

            <div className="bg-white rounded-lg shadow p-6 mt-6">

                <h2 className="text-2xl font-bold mb-3">

                    Bookmarks

                </h2>

                <p className="text-gray-500">

                    No bookmarks added yet.

                </p>

            </div>

        );

    }

    return (

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">

            <h2 className="text-2xl font-bold mb-5">

                Saved Bookmarks

            </h2>

            <div className="space-y-4">

                {bookmarks.map((bookmark, index) => (

                    <div
                        key={bookmark._id || index}
                        className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50"
                    >

                        <div>

                            <h3 className="font-semibold text-lg">

                                {bookmark.bookmarkName || `Bookmark ${index + 1}`}

                            </h3>

                            <p className="text-gray-600">

                                {formatTime(bookmark.timestamp)}

                            </p>

                        </div>

                        <div className="flex gap-2">

    <button
        onClick={() => onSeek(bookmark.timestamp)}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
    >
        <FaPlay />
        Resume
    </button>

    {onEdit && (

        <button
            onClick={() => onEdit(bookmark)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
            <FaEdit />
        </button>

    )}

    {onDelete && (

        <button
            onClick={() => onDelete(bookmark._id)}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
        >
            <FaTrash />
        </button>

    )}

</div>

                    </div>

                ))}

            </div>

        </div>

    );

}