import { useState } from "react";
import {
  BgChat,
  // BgChat,
  BgIntro,
  IcArchive,
  IcBack,
  IcComunity,
  IcEmoji,
  IcFilter,
  IcMicrofont,
  IcNewMessage,
  IcNotif,
  IcPlus,
  IcSaluran,
  IcSearch,
  IcSearchChat,
  IcSetting,
  IStatusUnRead,
} from "./assets";
import demoData from "./assets/data/datachat.json";

export interface demoDataInterFace {
  active: number;
  data: {
    profile: string;
    name: string;
    message: string;
    time: string;
    notificationCount: number;
  };
}

const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActiveChat, setActiveChat] = useState<demoDataInterFace>({
    active: -1,
    data: {
      profile: "",
      name: "",
      message: "",
      time: "",
      notificationCount: 0,
    },
  });
  const truncateText = (text: string) => {
    if (text.length > 40) {
      return text.slice(0, 40) + "...";
    }
    return text;
  };

  return (
    <div className="h-screen sm:w-full md:w-full lg:flex">
      <div
        className={`lg:w-30 bg-color1 ${isActiveChat.active !== -1 && "xs:hidden sm:hidden lg:block"} `}
      >
        <div className="bg-color2">
          <div className="mx-2 flex items-center justify-between p-2">
            <img
              className="h-10 w-10 rounded-full"
              src="https://pps.whatsapp.net/v/t61.24694-24/399111773_1282213165814980_2250441158226597655_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRhZtGi3bpjiDaD0ZHZDYKdLyuWB1IO0L29FBErz37slA&oe=65CB76CC&_nc_sid=e6ed6c&_nc_cat=108"
            />
            <div className="flex flex-row justify-around">
              <img
                src={IcComunity}
                alt="Example SVG"
                className="mx-3 h-6 w-6 rounded-full"
              />
              <img
                src={IStatusUnRead}
                alt="Pesan"
                className="mx-3 h-6 w-6 rounded-full"
              />
              <img
                src={IcSaluran}
                alt="Saluran"
                className="mx-3 h-6 w-6 rounded-full"
              />
              <img
                src={IcNewMessage}
                alt="New Message"
                className="mx-3 h-6 w-6 rounded-full"
              />
              <img
                src={IcSetting}
                alt="Setting"
                className="mx-3 h-6 w-6 rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div id="Search" className="m-2 hidden lg:block">
            <div className="item-center flex flex-row">
              <div className="relative flex flex-grow items-center">
                <img
                  src={isFocused ? IcBack : IcSearch}
                  className="absolute left-2 h-6 w-6 cursor-pointer  text-gray-500"
                />
                <input
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="h-8 w-full rounded-8 bg-color2 pl-10 text-cyan-50 outline-none"
                  placeholder={isFocused ? "" : "Cari atau mulai chat baru"}
                />
              </div>
              <img
                src={IcFilter}
                className="ml-2 mt-1 h-6 w-6 cursor-pointer"
              />
            </div>
          </div>
          <div id="archive">
            <div className="mx-4 flex flex-row items-center justify-between ">
              <img src={IcArchive} className="ml-2 mr-8 h-5 w-5" />
              <div className="mt-5 flex w-full flex-col border-b-2 border-color1">
                <p className="mb-4 text-color1"> Diarsipkan </p>
              </div>
              <p className="text-xs text-colorActive">1</p>
            </div>
          </div>
          <div
            className={`custom-scrollbar h-screen overflow-y-auto lg:max-h-[35rem] `}
          >
            <div className={`flex cursor-pointer flex-col`}>
              {demoData.map((list, index) => {
                return (
                  <section
                    key={index}
                    onClick={() =>
                      setActiveChat({
                        active: index,
                        data: list,
                      })
                    }
                    className={`${isActiveChat.active === index && "bg-chatActive"}`}
                  >
                    <div className={`ml-3 mr-4 flex items-center space-y-4 `}>
                      <img
                        src={list.profile}
                        className="mr-4 h-12 w-12 rounded-full"
                        alt="Profile"
                      />
                      <div className="flex w-full flex-col">
                        <div className="flex justify-between border-b-2 border-color1">
                          <div className="flex flex-col">
                            <p className="text-color1">{list.name}</p>
                            <p className="mb-6 w-full text-xs text-stone-300">
                              {truncateText(list.message)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-color2">{list.time}</p>
                            <div className="flex-end mt-1 flex justify-end">
                              <img
                                src={IcNotif}
                                className="mr-2 h-4 w-4"
                                alt="Notification"
                              />
                              <div className="flex w-5 items-center justify-center rounded-full bg-colorActive text-black">
                                <p className="text-xs">
                                  {list.notificationCount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isActiveChat.active === -1 ? (
        <div className="hidden h-full w-full items-center justify-center border-l border-color2 bg-color2 sm:hidden md:hidden lg:flex">
          <img src={BgIntro} alt="Background" className="h-[50rem] w-[50rem]" />
        </div>
      ) : (
        <div className="flex h-screen w-full bg-color2 lg:border-l lg:border-color2">
          <div className="flex w-full flex-col justify-between bg-color1">
            <div className="w-full bg-color2">
              <div className="mx-2 flex items-center justify-between p-2">
                <div className="flex items-center justify-between">
                  <img
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
                    src={IcSearchChat}
                    className="mr-7 h-[1.5rem] w-[1.5rem] cursor-pointer"
                  />
                  <img
                    src={IcSetting}
                    className="mr-2 h-6 w-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex h-[80vh]">
              <div
                className="custom-scrollbar flex w-full overflow-y-scroll bg-color1"
                style={{
                  background: `linear-gradient(rgba(17, 27, 33, 0.5), rgba(17, 27, 33, 0.5)), url('${BgChat}')`,
                }}
              >
                <div className="mx-10 w-full flex-col text-color1">
                  <p>{isActiveChat.data.message}</p>
                </div>
              </div>
            </div>
            <div className="bg-color3 flex w-full items-center p-4">
              {" "}
              <div className="mr-4 flex flex-row">
                <img src={IcEmoji} className="ml-2 h-7 w-7 cursor-pointer" />
                <img
                  src={IcPlus}
                  className="ml-2 mr-3 h-7 w-7 cursor-pointer"
                />
              </div>
              <div className="ml-2 w-full">
                <input
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="bg-color4 h-9 w-full rounded-8 pl-2 text-cyan-50 outline-none"
                  placeholder={"Ketik Pesan"}
                />
              </div>
              <img src={IcMicrofont} className="ml-2 h-7 w-7 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
