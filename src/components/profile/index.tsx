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
          src="https://pps.whatsapp.net/v/t61.24694-24/399111773_1282213165814980_2250441158226597655_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdRhZtGi3bpjiDaD0ZHZDYKdLyuWB1IO0L29FBErz37slA&oe=65CB76CC&_nc_sid=e6ed6c&_nc_cat=108"
        />
        <div className="flex flex-row justify-around gap-3">
          {dataMenu.map((list, index) => {
            return (
              <ItemIcon
                key={index}
                title={list.title}
                img={list.img}
                active={index === isTogleMenu.active ? true : false}
                onClick={() =>
                  setToggleMenu({
                    active: index,
                    title: list.title,
                  })
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
