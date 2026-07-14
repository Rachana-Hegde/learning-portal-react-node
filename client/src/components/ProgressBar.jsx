export default function ProgressBar({
    currentTime = 0,
    duration = 0
}) {

    const percentage =
        duration > 0 ? (currentTime / duration) * 100 : 0;

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

    return (

        <div className="bg-white rounded-lg shadow-lg p-5 mt-6">

            <div className="flex justify-between mb-3">

                <h2 className="text-xl font-semibold">

                    Watch Progress

                </h2>

                <span className="font-bold text-blue-600">

                    {percentage.toFixed(0)}%

                </span>

            </div>

            <div className="w-full bg-gray-300 rounded-full h-4">

                <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-300"
                    style={{
                        width: `${percentage}%`
                    }}
                />

            </div>

            <div className="flex justify-between mt-3 text-gray-600">

                <span>

                    {formatTime(currentTime)}

                </span>

                <span>

                    {formatTime(duration)}

                </span>

            </div>

        </div>

    );

}