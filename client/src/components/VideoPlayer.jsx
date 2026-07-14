import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  videoUrl,
  initialTime = 0,
  onBookmark,
  onProgress,
  onDuration
}) {
  const playerRef = useRef(null);

  const [playedSeconds, setPlayedSeconds] = useState(initialTime);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (playerRef.current && initialTime > 0) {
      playerRef.current.seekTo(initialTime, "seconds");
    }
  }, [initialTime]);

  const handleProgress = (state) => {
    setPlayedSeconds(state.playedSeconds);

    if (onProgress) {
      onProgress(state.playedSeconds);
    }
  };

  const addBookmark = () => {
    if (onBookmark) {
      onBookmark(playedSeconds);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4">

      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        controls
        playing={playing}
        width="100%"
        height="600px"
        onProgress={handleProgress}
        onDuration={(d) => {

    setDuration(d);

    if(onDuration){

        onDuration(d);

    }

}}
      />

      <div className="flex justify-between mt-4">

        <div>
          <p>
            Current Time :
            <strong>
              {" "}
              {Math.floor(playedSeconds / 60)}:
              {String(Math.floor(playedSeconds % 60)).padStart(2, "0")}
            </strong>
          </p>

          <p>
            Duration :
            <strong>
              {" "}
              {Math.floor(duration / 60)}:
              {String(Math.floor(duration % 60)).padStart(2, "0")}
            </strong>
          </p>
        </div>

        <button
          onClick={addBookmark}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Bookmark
        </button>

      </div>

    </div>
  );
}