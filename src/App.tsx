import {
  ChatAndWelcomScreen,
  ListChat,
  Panel,
  PanelChat,
  Profile,
} from "./components";

const App = () => {
  return (
    <Panel>
      <PanelChat>
        <Profile />
        <ListChat />
      </PanelChat>
      <ChatAndWelcomScreen />
    </Panel>
  );
};

export default App;
