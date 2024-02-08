import { useEffect, useState } from "react";
import { Logo } from "./assets";
import {
  ChatAndWelcomScreen,
  ListChat,
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
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-color2">
      <img src={Logo} className="h-72 w-72" />
      <div className="-mt-20 w-[18rem] rounded-lg bg-gray-200 xs:w-[10rem] md:w-[25rem] lg:w-[25rem]">
        <div
          className="h-1 rounded-lg bg-color6"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
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
