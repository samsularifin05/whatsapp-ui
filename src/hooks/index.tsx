/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

// Definisikan tipe untuk nilai yang disediakan oleh provider
interface ActiveChatContextValue {
  isActiveChat: {
    active: number;
    data: {
      profile: string;
      name: string;
      message: string;
      time: string;
      notificationCount: number;
    };
  };
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveChat: React.Dispatch<
    React.SetStateAction<{
      active: number;
      data: {
        profile: string;
        name: string;
        message: string;
        time: string;
        notificationCount: number;
      };
    }>
  >;
}

// Buat context
const ActiveChatContext = createContext<ActiveChatContextValue | undefined>(
  undefined
);

// Buat provider
export const ActiveChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isActiveChat, setActiveChat] = useState({
    active: -1,
    data: {
      profile: "",
      name: "",
      message: "",
      time: "",
      notificationCount: 0,
    },
  });

  const [isFocused, setIsFocused] = useState(false);

  return (
    <ActiveChatContext.Provider
      value={{ isActiveChat, setActiveChat, isFocused, setIsFocused }}
    >
      {children}
    </ActiveChatContext.Provider>
  );
};

// Buat custom hook untuk menggunakan context
export const useActiveChat = () => {
  const context = useContext(ActiveChatContext);
  if (!context) {
    throw new Error("useActiveChat must be used within a ActiveChatProvider");
  }
  return context;
};
