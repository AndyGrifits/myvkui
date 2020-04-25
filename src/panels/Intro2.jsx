import React from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import FixedLayout from "@vkontakte/vkui/dist/components/FixedLayout/FixedLayout";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import Man from "../resources/Man.svg";
import Next from "../resources/Next.svg";
import Pager from "../resources/Pager.svg";

const Home = ({ id, go }) => (
  <Panel separator={false} id={id}>
    <PanelHeader transparent={true}></PanelHeader>
    <Group className="GroupTest2">
      <img className="Intro2-img" src={Man} alt="intro_image" />

      <text className="Intro2-txt">
        Тебе будут выпадать слова, ты должен описать их не используя
        однокоренные, все просто!
      </text>
    </Group>

    <Div id={id} className="Main--bg"></Div>
    <FixedLayout vertical="bottom">
      <img src={Pager} className="Intro-pg" alt="intro_image" />
      <button onClick={go} data-to="main" className="Intro-btn">
        <img src={Next} className="Intro-btnimg" alt="intro_image" />
      </button>
    </FixedLayout>
  </Panel>
);

export default Home;
