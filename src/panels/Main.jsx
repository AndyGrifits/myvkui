import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Logo from "../resources/Logo.svg";

const Home = ({ id, go }) => (
  <Panel separator={false} id={id}>
    <PanelHeader transparent={true}></PanelHeader>
    <img className="Main-logo" src={Logo} alt="crown_icon" />

    <Div id={id} className="Main--bg">
      <button onClick={go} data-to="persik" className="Main-button">
        ИГРАТЬ
      </button>
    </Div>
    <FixedLayout vertical="bottom">
      <button onClick={go} data-to="intro" className="Main-button2">
        Правила игры
      </button>
      <button onClick={go} data-to="intro" className="Main-button3">
        О приложении
      </button>
    </FixedLayout>
  </Panel>
);

export default Home;
