import { useEffect, useState } from "react";
import {
  ChatAndWelcomScreen,
  ListChat,
  LoadingScreen,
  Panel,
  PanelChat,
  Profile,
} from "./components";
import { useContextApp } from "./hooks";
import Comunity from "./components/profile/comunity";
import Status from "./components/profile/status";
import Message from "./components/profile/message";
import Saluran from "./components/profile/saluran";

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

  const { isTogleMenu } = useContextApp();

  function renderMenuContent(title: string) {
    switch (title) {
      case "Comunity":
        return <Comunity />;
      case "Status":
        return <Status />;
      case "Message":
        return <Message />;
      case "Saluran":
        return <Saluran />;
      default:
        return (
          <>
            <Profile />
            <ListChat />
          </>
        );
    }
  }
  return loading ? (
    <LoadingScreen progress={progress} />
  ) : (
    <Panel>
      <PanelChat>{renderMenuContent(isTogleMenu.title)}</PanelChat>
      <ChatAndWelcomScreen />
    </Panel>
  );
};

export default App;
