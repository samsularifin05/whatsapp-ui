import { ReactNode } from "react";
import { useContextApp } from "../../hooks";
import { DetailChat, Welcome } from "..";

export const Panel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen flex-row overflow-hidden">{children}</div>
  );
};

export const PanelChat: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isActiveChat } = useContextApp();

  return (
    <div
      className={`lg:w-30 w-full bg-color1 lg:block ${isActiveChat.active !== -1 && "hidden"} `}
    >
      {children}
    </div>
  );
};

export const ChatAndWelcomScreen: React.FC = () => {
  const { isActiveChat } = useContextApp();

  return isActiveChat.active === -1 ? <Welcome /> : <DetailChat />;
};
