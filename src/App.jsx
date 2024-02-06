import React from "react";
import classes from "./App.module.css";
import Headertop from "./components/layout/Headertop";
import AvailableColors from "./components/albums/AvailableColors";

const App = () => {
  return (
    <>
      <Headertop></Headertop>
      <h1>COLORS</h1>
      <main>
        <AvailableColors></AvailableColors>
      </main>
      <button className={classes.btnbtm}>See the Cart</button>
    </>
  );
};

export default App;
