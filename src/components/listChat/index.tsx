import { IcArchive, IcBack, IcFilter, IcNotif, IcSearch } from "../../assets";
import demoData from "../../assets/data/datachat.json";
import { truncateText } from "../../helpers";
import { useActiveChat } from "../../hooks";

const ListChat = () => {
  const { isActiveChat, setActiveChat, setIsFocused, isFocused } =
    useActiveChat();
  return (
    <div className="h-screen">
      <div id="Search" className="m-2 hidden lg:block">
        <div className="item-center flex flex-row">
          <div className="relative flex flex-grow items-center">
            <img
              alt="icon-search"
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
            alt="icon-filter"
            src={IcFilter}
            className="ml-2 mt-1 h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div id="archive">
        <div className="mx-4 flex flex-row items-center justify-between ">
          <img
            src={IcArchive}
            alt="icon-archive"
            className="ml-2 mr-8 h-5 w-5"
          />
          <div className="mt-5 flex w-full flex-col border-b-2 border-color1">
            <p className="mb-4 text-color1"> Diarsipkan </p>
          </div>
          <p className="text-xs text-colorActive">1</p>
        </div>
      </div>
      <div className={`custom-scrollbar h-screen overflow-y-auto `}>
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
