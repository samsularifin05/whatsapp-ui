import { useState } from "react";
import {
  BgIntro,
  IcArchive,
  IcBack,
  IcComunity,
  IcFilter,
  IcNewMessage,
  IcNotif,
  IcSaluran,
  IcSearch,
  IcSetting,
  IStatusUnRead,
} from "./assets";
import { faker } from "@faker-js/faker";
const generateDemoData = () => {
  const demoData = [];

  for (let i = 0; i < 10; i++) {
    const profile = `https://placekitten.com/200/200?image=${i + 1}`; // Use a placeholder image URL
    const name = faker.person.fullName();
    const message = faker.lorem.sentence();
    const time = faker.date.recent().toLocaleTimeString();
    const notificationCount = faker.number.int(10);

    demoData.push({
      profile,
      name,
      message,
      time,
      notificationCount,
    });
  }

  return demoData;
};
const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActiveChat, setActiveChat] = useState(-1);
  const truncateText = (text: string) => {
    if (text.length > 40) {
      return text.slice(0, 40) + "...";
    }
    return text;
  };

  const demoData = generateDemoData();
  return (
    <div className="h-screen sm:w-full md:w-full lg:flex">
      <div className="lg:w-30 bg-color1 ">
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
                  className="bg-color2 rounded-8 h-8 w-full pl-10 text-cyan-50 outline-none"
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
              <div className="border-color1 mt-5 flex w-full flex-col border-b-2">
                <p className="text-color1 mb-4"> Diarsipkan </p>
              </div>
              <p className="text-colorActive text-xs">1</p>
            </div>
          </div>
          <div className="custom-scrollbar overflow-y-auto  sm:w-full md:max-h-screen lg:max-h-[35rem]">
            <div className={`flex cursor-pointer flex-col`}>
              {demoData.map((list, index) => {
                return (
                  <section
                    key={index}
                    onClick={() => setActiveChat(index)}
                    className={`${isActiveChat === index && "bg-chatActive"}`}
                  >
                    <div className={`ml-3 mr-4 flex items-center space-y-4 `}>
                      <img
                        src={list.profile}
                        className="mr-4 h-12 w-12 rounded-full"
                        alt="Profile"
                      />
                      <div className="flex w-full flex-col">
                        <div className="border-color1 flex justify-between border-b-2">
                          <div className="flex flex-col">
                            <p className="text-color1">{list.name}</p>
                            <p className="mb-6 w-full text-xs text-stone-300">
                              {truncateText(list.message)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-color2 text-xs">{list.time}</p>
                            <div className="flex-end mt-1 flex justify-end">
                              <img
                                src={IcNotif}
                                className="mr-2 h-4 w-4"
                                alt="Notification"
                              />
                              <div className="bg-colorActive flex w-5 items-center justify-center rounded-full text-black">
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
      <div className="bg-color2 border-color2 hidden h-full w-full justify-center border-l sm:flex md:hidden lg:flex">
        <img src={BgIntro} alt="Background" />
      </div>
    </div>
  );
};

export default App;
