import React from "react";
import "./App.css";
import AudioArticle from "./components/AudioArticles";
import Facts from "./components/Facts";
import Popular from "./components/Popular";
import Channels from "./components/Channels";
import Navbar from "./components/Navbar";
import OpenPage from "./components/OpenPage";
function App() {
  return (
    <React.Fragment>
      <OpenPage />
      <Navbar />
      <Channels />
      <Popular />
      <Facts />
      <AudioArticle />
    </React.Fragment>
  );
}

export default App;
