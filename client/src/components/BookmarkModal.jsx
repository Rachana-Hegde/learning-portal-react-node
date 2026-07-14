import { useState } from "react";

export default function BookmarkModal({
    isOpen,
    onClose,
    onSave,
    currentTime
}) {

    const [bookmarkName, setBookmarkName] = useState("");

    const formatTime = (seconds) => {

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);

        return `${min}:${sec.toString().padStart(2, "0")}`;

    };

    const handleSave = () => {

        onSave({

            bookmarkName,

            timestamp: currentTime,

        });

        setBookmarkName("");

        onClose();

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl shadow-xl p-6 w-96">

                <h2 className="text-2xl font-bold mb-5">

                    Add Bookmark

                </h2>

                <p className="mb-3 text-gray-600">

                    Timestamp

                </p>

                <input

                    type="text"

                    value={formatTime(currentTime)}

                    readOnly

                    className="border w-full p-3 rounded mb-4 bg-gray-100"

                />

                <p className="mb-3 text-gray-600">

                    Bookmark Name (Optional)

                </p>

                <input

                    type="text"

                    placeholder="Example: Important Topic"

                    className="border w-full p-3 rounded"

                    value={bookmarkName}

                    onChange={(e) => setBookmarkName(e.target.value)}

                />

                <div className="flex justify-end gap-3 mt-6">

                    <button

                        onClick={onClose}

                        className="px-5 py-2 rounded bg-gray-300"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={handleSave}

                        className="px-5 py-2 rounded bg-blue-600 text-white"

                    >

                        Save Bookmark

                    </button>

                </div>

            </div>

        </div>

    );

}