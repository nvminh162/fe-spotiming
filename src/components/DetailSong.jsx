import { useContext } from "react";
import { songs } from "../Context";

import ava1 from '../assets/images/avatar1.jpg'
import ava2 from '../assets/images/avatar2.jpg'

function DetailSong() {
  const { song } = useContext(songs);
  return (
    <div className="col-span-1 p-3">
      <h2 className="text-cyan-500 font-bold text-center">Now playing</h2>
      <h2 className="text-neutral-400 text-xl text-center">
        You are listening to music on Spotiming
      </h2>
      <div className="w-[240px] m-auto mt-10">
        <img
          className="w-full"
          src={ava1}
          alt="Jack"
        />
      </div>
      <div className="flex items-center mt-10 justify-center">
        <img
          className="w-[70px] h-[70px] object-cover rounded-full mr-5 spin-avatar"
          src={ava2}
        />
        <span className="text-xl text-white">Nghệ sĩ: {song.author}</span>
      </div>
    </div>
  );
}

export default DetailSong;
