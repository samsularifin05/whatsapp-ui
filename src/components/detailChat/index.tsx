import {
  BgChat,
  IcBack,
  IcBorderChat,
  IcBorderChatActive,
  IcEmoji,
  IcMicrofont,
  IcPlus,
  IcSearchChat,
  IcSetting,
} from "../../assets";
import { useContextApp } from "../../hooks";

const DetailChat = () => {
  const { isActiveChat, setIsFocused, setActiveChat } = useContextApp();

  const width =
    isActiveChat.data.message.length > 40
      ? 40
      : isActiveChat.data.message.length;

  return (
    <div className="flex h-screen w-full bg-color2 lg:border-l lg:border-color2">
      <div className="flex w-full flex-col justify-between bg-color1">
        <div className="w-full bg-color2">
          <div className="mx-2 flex items-center justify-between p-2">
            <div className="flex items-center justify-between">
              <img
                src={IcBack}
                className="mr-4 h-6 w-6 cursor-pointer"
                onClick={() =>
                  setActiveChat({
                    active: -1,
                    data: {
                      profile: "",
                      name: "",
                      message: "",
                      time: "",
                      notificationCount: 0,
                    },
                  })
                }
              />
              <img
                alt="profile"
                className="h-10 w-10 rounded-full"
                src={isActiveChat.data.profile}
              />
              <p className="ml-3 cursor-pointer text-color1">
                {" "}
                {isActiveChat.data.name}{" "}
              </p>
            </div>
            <div className="flex items-end">
              <img
                alt="icon-search-chat"
                src={IcSearchChat}
                className="mr-7 h-[1.5rem] w-[1.5rem] cursor-pointer"
              />
              <img
                alt="icon-setting"
                src={IcSetting}
                className="mr-2 h-6 w-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[80vh]">
          <div
            className="custom-scrollbar flex w-full flex-col-reverse overflow-y-scroll bg-color1 "
            style={{
              backgroundImage: `linear-gradient(rgba(17, 27, 33, 0.5), rgba(17, 27, 33, 0.5)), url('${BgChat}')`,
            }}
          >
            <div className="w-2/2 mx-10 mb-5 text-color1">
              <div className="flex flex-col">
                <div className="-ml-5 flex  self-start">
                  <img src={IcBorderChat} className="mt-[0.65rem] h-6 w-6" />
                  <div className="-ml-2 mt-3 rounded bg-color3">
                    <p
                      className={`ml-2 self-start p-2 ${isActiveChat.data.message.length > 40 ? "lg:w-[40rem]" : `lg:w-[${width}rem]`}`}
                    >
                      {isActiveChat.data.message}
                    </p>
                  </div>
                </div>

                <div className="flex self-end">
                  <div className="-ml-2 mt-3 rounded bg-color5">
                    <p
                      className={`ml-3 self-end p-2 ${isActiveChat.data.message.length > 40 ? "lg:w-[40rem]" : `lg:w-[${width}rem]`}`}
                    >
                      {isActiveChat.data.message}
                    </p>
                  </div>
                  <img
                    src={IcBorderChatActive}
                    className="-ml-2 -mr-4 mt-[0.73rem] h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center bg-color3 p-4">
          {" "}
          <div className="mr-4 flex flex-row">
            <img
              src={IcEmoji}
              alt="icon-emoji"
              className="ml-2 h-7 w-7 cursor-pointer"
            />
            <img
              alt="icon-plus"
              src={IcPlus}
              className="ml-2 mr-3 h-7 w-7 cursor-pointer"
            />
          </div>
          <div className="ml-2 w-full">
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="h-9 w-full rounded-8 bg-color4 pl-2 text-cyan-50 outline-none"
              placeholder={"Ketik Pesan"}
            />
          </div>
          <img
            src={IcMicrofont}
            alt="icon-microfont"
            className="ml-2 h-7 w-7 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailChat;
