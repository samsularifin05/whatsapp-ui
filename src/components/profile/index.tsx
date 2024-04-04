import {
  IStatusUnRead,
  IcComunity,
  IcNewMessage,
  IcSaluran,
  IcSetting,
} from "../../assets";
import { useContextApp } from "../../hooks";
import ItemIcon from "./itemIcon";

const Profile = () => {
  const dataMenu = [
    {
      title: "Comunity",
      img: IcComunity,
    },
    {
      title: "Status",
      img: IStatusUnRead,
    },
    {
      title: "Message",
      img: IcNewMessage,
    },
    {
      title: "Saluran",
      img: IcSaluran,
    },
    {
      title: "Setting",
      img: IcSetting,
    },
  ];

  const { isTogleMenu, setToggleMenu } = useContextApp();
  return (
    <div className="bg-color2">
      <div className="mx-2 flex items-center justify-between p-2">
        <img
          alt="profile"
          className="h-10 w-10 rounded-full"
          src="https://avatars.githubusercontent.com/u/21103299?v=4"
        />
        <div className="flex flex-row justify-around gap-3">
          {dataMenu.map((list, index) => {
            return (
              <ItemIcon
                key={index}
                title={list.title}
                img={list.img}
                active={index === isTogleMenu.active ? true : false}
                onClick={() => {
                  if (index !== isTogleMenu.active) {
                    setToggleMenu({
                      active: index,
                      title: list.title,
                    });
                  } else {
                    setToggleMenu({
                      active: -1,
                      title: "",
                    });
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
