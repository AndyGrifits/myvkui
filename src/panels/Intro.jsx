import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import { Text } from "@vkontakte/vkui";

import Party from "../resources/Party.svg";
import Next from "../resources/Next.svg";
import Pager from "../resources/Pager.svg";

const Home = ({ id, go }) => (
  <Panel separator={false} id={id}>
    <PanelHeader transparent={true}></PanelHeader>
    <Group className="GroupTest">
      <img className="Intro-img" src={Party} alt="intro_image" />

      <text className="Intro-txt">
        Alias - веселая игра для отдыха с друзьями, которая не даст вам
        заскучать! Зови друзей и начинайте играть!
      </text>
    </Group>

    <Div id={id} className="Main--bg"></Div>
    <FixedLayout vertical="bottom">
      <img src={Pager} className="Intro-pg" alt="intro_image" />
      <button onClick={go} data-to="intro2" className="Intro-btn">
        <img src={Next} className="Intro-btnimg" alt="intro_image" />
      </button>
    </FixedLayout>
  </Panel>
);

export default Home;
