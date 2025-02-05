import { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
import { songs } from "./Context";
import DataSongs from "./data/song.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((item) => item.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };

  return (
    <div className="App">
      <songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-content h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSongs />
        </div>
        <Playing />
      </songs.Provider>
    </div>
  );
}

export default App;
