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
  const [progress, setProgress] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment progress by 1 every 100 milliseconds until it reaches 100
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        setLoading(false); // Hide progress bar and show panel
      }
    }, 100);

    // Cleanup function to clear interval on unmount or progress reaches 100
    return () => clearInterval(interval);
  }, [progress]);
  return loading ? (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-color2">
      <img src={Logo} className="h-72 w-72" />
      <div className="-mt-20 w-[25rem] rounded-lg bg-gray-200">
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
