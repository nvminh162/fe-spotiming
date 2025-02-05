import { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { songs } from "../Context";

function Playing() {
  const { song, handleSetSong } = useContext(songs);

  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };

  const handleClickPrevious = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        autoPlay
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
}

export default Playing;
