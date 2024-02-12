import { BackWhite, IcKomunitas } from "../../assets";
import { useContextApp } from "../../hooks";

const Comunity = () => {
  const { setToggleMenu } = useContextApp();

  return (
    <div data-aos="fade-right">
      <div className=" h-28 w-full  bg-color2 p-5">
        <div className="mt-12 flex items-center gap-7">
          <img
            src={BackWhite}
            className="h-6 w-6 cursor-pointer"
            onClick={() =>
              setToggleMenu({
                active: -1,
                title: "",
              })
            }
          />
          <p className="text-[19px] text-color3">Komunitas</p>
        </div>
      </div>
      <div className="flex h-20 items-center gap-3 bg-color1 p-2 text-white">
        <img
          src={IcKomunitas}
          className="h-12 w-12  rounded-xl bg-colorActive p-2"
        />
        Komunitas Baru
      </div>
    </div>
  );
};

export default Comunity;
