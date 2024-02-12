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
    const storedIsLoading = localStorage.getItem("IsLoading");
    if (storedIsLoading === "false") {
      setLoading(false);
    } else {
      const interval = setInterval(() => {
        if (progress < 100) {
          setProgress(progress + 1);
          localStorage.setItem("IsLoading", "true");
        } else {
          clearInterval(interval);
          setLoading(false);
          localStorage.setItem("IsLoading", "false");
        }
      }, 100);
      return () => clearInterval(interval);
    }
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
