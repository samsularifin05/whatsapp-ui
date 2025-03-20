import { useEffect, useState } from "react";
import {
  ListChat,
  LoadingScreen,
  Panel,
  PanelChat,
  Profile,
  Status,
  Message,
  Saluran,
  Comunity,
  ScanBarcode,
  ChatAndWelcomScreen,
} from "./components";
import { useContextApp } from "./hooks";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [screenBarcode, setScreenBarcode] = useState(true);

  const storedIsLoading = localStorage.getItem("IsLoading");
  useEffect(() => {
    if (screenBarcode === false) {
      if (storedIsLoading === "false") {
        setLoading(false);
      } else {
        const interval = setInterval(() => {
          if (progress < 100) {
            setProgress((prevProgress) => prevProgress + 1);
            localStorage.setItem("IsLoading", "true");
          } else {
            clearInterval(interval);
            setLoading(false);
            localStorage.setItem("IsLoading", "false");
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }
  }, [progress, screenBarcode, storedIsLoading]);

  const moveScreen = () => {
    console.log("MASUK");
    setScreenBarcode(false);
  };

  return storedIsLoading === "false" ? (
    <ChatScreen />
  ) : screenBarcode ? (
    <ScanBarcode onClick={moveScreen} />
  ) : loading ? (
    <LoadingScreen progress={progress} />
  ) : (
    <ChatScreen />
  );
};

const ChatScreen = () => {
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
  return (
    <Panel>
      <PanelChat>
        {renderMenuContent(isTogleMenu.title)}
        <Profile />
        <ListChat />
      </PanelChat>
      <ChatAndWelcomScreen />
    </Panel>
  );
};

export default App;
