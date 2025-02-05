import { useContext, useEffect, useState } from "react";
import { songs } from "../Context";

function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(songs);
  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = (id) => {
    setIdSong(id);
    handleSetSong(id);
  };

  //cap nhat lai khi next previous
  useEffect(() => {
    setIdSong(song.id)
  }, [song])

  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full bg-gray-950">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[20%]">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="">
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-gray-950 h-12 text-gray-200 hover:bg-gray-600 ${
                idSong === song.id && "text-teal-400"
              }`}
              onClick={() => {
                handlePlaySong(song.id);
              }}
            >
              <td className="text-center">{index + 1}</td>
              <td className="">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListSongs;
