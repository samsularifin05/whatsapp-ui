import { IcArchive, IcBack, IcFilter, IcNotif, IcSearch } from "../../assets";
import demoData from "../../assets/data/datachat.json";
import { truncateText } from "../../helpers";
import { useContextApp } from "../../hooks";

const ListChat = () => {
  const {
    isActiveChat,
    setActiveChat,
    setIsFocused,
    isFocused,
    setToggleMenu,
  } = useContextApp();

  return (
    <div className="h-screen">
      <div id="Search" className="hidden m-2 lg:block">
        <div className="flex flex-row item-center">
          <div className="relative flex items-center flex-grow">
            <img
              alt="icon-search"
              src={isFocused ? IcBack : IcSearch}
              className="absolute w-6 h-6 text-gray-500 cursor-pointer left-2"
            />
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full h-8 pl-10 outline-none rounded-8 bg-color2 text-cyan-50"
              placeholder={isFocused ? "" : "Cari atau mulai chat baru"}
            />
          </div>
          <img
            alt="icon-filter"
            src={IcFilter}
            className="w-6 h-6 mt-1 ml-2 cursor-pointer"
          />
        </div>
      </div>
      <div className={`custom-scrollbar h-screen overflow-y-auto`}>
        <div id="archive">
          <div className="flex flex-row items-center justify-between mx-4">
            <img
              src={IcArchive}
              alt="icon-archive"
              className="w-5 h-5 ml-2 mr-8"
            />
            <div className="flex flex-col w-full mt-5 border-b-2 border-color17">
              <p className="mb-4 text-color16"> Diarsipkan </p>
            </div>
            <p className="text-xs text-colorActive">1</p>
          </div>
        </div>
        <div className={`mb-12 flex cursor-pointer flex-col lg:mb-4`}>
          {demoData.map((list, index) => {
            // const bgColor = getRandomColor();
            // const textColor = getTextColor(bgColor);
            return (
              <section
                key={index}
                onClick={() => {
                  setActiveChat({
                    active: index,
                    data: list,
                  });
                  setToggleMenu({
                    active: -1,
                    title: "",
                  });
                }}
                className={`${isActiveChat.active === index && "bg-chatActive"}`}
              >
                <div className={`mr-4 ml-3 flex items-center space-y-4`}>
                  <img
                    src={list.profile}
                    className="w-12 h-10 mr-4 rounded-full"
                    alt="Profile"
                  />
                  {/* <div
                    className={
                      "mr-2 flex h-10 w-11 items-center justify-center rounded-full  text-center"
                    }
                    style={{ backgroundColor: bgColor, color: textColor }}
                  >
                    {list.name.slice(0, 1)}
                  </div> */}
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between border-b-2 border-color17">
                      <div className="flex flex-col">
                        <p className="text-color16">{list.name}</p>
                        <p className="w-full mb-6 text-xs text-stone-300">
                          {truncateText(list.message)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-color10">{list.time}</p>
                        <div className="flex justify-end mt-1 flex-end">
                          <img
                            src={IcNotif}
                            className="w-4 h-4 mr-2"
                            alt="Notification"
                          />
                          <div className="flex items-center justify-center w-5 text-black rounded-full bg-colorActive">
                            <p className="text-xs">{list.notificationCount}</p>
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
  );
};

export default ListChat;
