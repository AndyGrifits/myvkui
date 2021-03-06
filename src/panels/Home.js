import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>ALIAS</PanelHeader>

    <Group title="Navigation Example">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="persik">
          Понятно!
        </Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
