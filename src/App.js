import React, { useState, useEffect } from "react";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import Intro from "./panels/Intro";
import Intro2 from "./panels/Intro2";
import Main from "./panels/Main";

const App = () => {
  const [activePanel, setActivePanel] = useState("intro");

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" go={go} />
      <Persik id="persik" go={go} />
      <Main id="main" go={go} />
      <Intro id="intro" go={go} />
      <Intro2 id="intro2" go={go} />
    </View>
  );
};

export default App;
