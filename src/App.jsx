import React from "react";
import classes from "./App.module.css";
import Headertop from "./components/layout/Headertop";
import AvailableColors from "./components/albums/AvailableColors";
import ColorFooter from "./components/albums/ColorFooter";

const App = () => {
  return (
    <>
      <Headertop></Headertop>
      <span className={classes.span}>COLORS  MUSIC...!</span>
      <main>
        <AvailableColors></AvailableColors>
      </main>
      <button className={classes.btnbtm}>See the Cart</button>
      <ColorFooter></ColorFooter>
    </>
  );
};

export default App;
