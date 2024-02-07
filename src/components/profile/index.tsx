import {
  IStatusUnRead,
  IcComunity,
  IcNewMessage,
  IcSaluran,
  IcSetting,
} from "../../assets";

const Profile = () => {
  return (
    <div className="bg-color2">
      <div className="mx-2 flex items-center justify-between p-2">
        <img
          alt="profile"
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
  );
};

export default Profile;
