import { BackWhite } from "../../assets";
import { useContextApp } from "../../hooks";

const Saluran = () => {
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
          <p className="text-[19px] text-color3">Saluran</p>
        </div>
      </div>
    </div>
  );
};

export default Saluran;
