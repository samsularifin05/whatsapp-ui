import { BackWhite, IcKomunitas } from "../../assets";
import { useContextApp } from "../../hooks";

const Comunity = () => {
  const { setToggleMenu } = useContextApp();

  return (
    <div
      data-aos="fade-right"
      className="absolute inset-0 z-50 overflow-y-auto"
    >
      <div className="bg-color2 h-28 w-[27.1rem] p-5">
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
          <p className="text-color11 text-[19px]">Komunitas</p>
        </div>
      </div>
      <div className="flex h-full w-[27.1rem]">
        <div className="bg-color1 flex w-[27.1rem] flex-col text-white">
          <div className="flex flex-row items-center gap-2 p-3">
            <img
              src={IcKomunitas}
              className="bg-colorActive h-12 w-12 rounded-xl p-2"
            />
            Komunitas Baru
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunity;
