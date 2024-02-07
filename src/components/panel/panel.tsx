import { ReactNode } from "react";
import { useActiveChat } from "../../hooks";
import { DetailChat, Welcome } from "..";

export const Panel: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex-row2 flex h-screen overflow-hidden">{children}</div>
  );
};

export const PanelChat: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isActiveChat } = useActiveChat();

  return (
    <div
      className={`lg:w-30 bg-color1 sm:w-full md:w-full ${isActiveChat.active !== -1 && "xs:hidden sm:hidden lg:block"} `}
    >
      {children}
    </div>
  );
};

export const ChatAndWelcomScreen: React.FC = () => {
  const { isActiveChat } = useActiveChat();

  return isActiveChat.active === -1 ? <Welcome /> : <DetailChat />;
};
