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
    <div className="flex w-full h-screen bg-color2 lg:border-color18 lg:border-l">
      <div className="flex flex-col justify-between w-full bg-color1">
        <div className="w-full bg-color2">
          <div className="flex items-center justify-between p-2 mx-2">
            <div className="flex items-center justify-between">
              <img
                src={IcBack}
                className="w-6 h-6 mr-4 cursor-pointer"
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
                className="w-10 h-10 rounded-full"
                src={isActiveChat.data.profile}
              />
              <p className="ml-3 cursor-pointer text-color16">
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
                className="w-6 h-6 mr-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[80vh]">
          <div
            className="flex flex-col-reverse w-full overflow-y-scroll custom-scrollbar bg-color1"
            style={{
              backgroundImage: `linear-gradient(rgba(17, 27, 33, 0.5), rgba(17, 27, 33, 0.5)), url('${BgChat}')`,
            }}
          >
            <div className="text-color16 mx-10 mb-5 w-[80%] lg:w-[90%]">
              <div className="flex flex-col">
                <div className="flex self-start -ml-5">
                  <img src={IcBorderChat} className="mt-[0.65rem] h-6 w-6" />
                  <div className="mt-3 -ml-2 rounded bg-color3">
                    <p
                      className={`ml-2 self-start p-2 ${isActiveChat.data.message.length > 40 ? "lg:w-[40rem]" : `lg:w-[${width}rem]`}`}
                    >
                      {isActiveChat.data.message}
                    </p>
                  </div>
                </div>

                <div className="flex self-end">
                  <div className="mt-3 -ml-2 rounded bg-color5">
                    <p
                      className={`ml-3 self-end p-2 ${isActiveChat.data.message.length > 40 ? "lg:w-[40rem]" : `lg:w-[${width}rem]`}`}
                    >
                      {isActiveChat.data.message}
                    </p>
                  </div>
                  <img
                    src={IcBorderChatActive}
                    className="mt-[0.73rem] -mr-4 -ml-2 h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full p-4 bg-color3">
          {" "}
          <div className="flex flex-row mr-4">
            <img
              src={IcEmoji}
              alt="icon-emoji"
              className="ml-2 cursor-pointer h-7 w-7"
            />
            <img
              alt="icon-plus"
              src={IcPlus}
              className="ml-2 mr-3 cursor-pointer h-7 w-7"
            />
          </div>
          <div className="w-full ml-2">
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full pl-2 outline-none rounded-8 bg-text-color12 h-9 text-cyan-50"
              placeholder={"Ketik Pesan"}
            />
          </div>
          <img
            src={IcMicrofont}
            alt="icon-microfont"
            className="ml-2 cursor-pointer h-7 w-7"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailChat;
