import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ActiveChatProvider } from "./hooks/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ActiveChatProvider>
    <App />
  </ActiveChatProvider>
);
