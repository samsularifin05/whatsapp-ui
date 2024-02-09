import { useEffect, useState } from "react";
import {
  ChatAndWelcomScreen,
  ListChat,
  LoadingScreen,
  Panel,
  PanelChat,
  Profile,
} from "./components";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        setLoading(false);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);
  return loading ? (
    <LoadingScreen progress={progress} />
  ) : (
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
