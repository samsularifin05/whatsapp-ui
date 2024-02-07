import { BgIntro, IcLock } from "../../assets";

const Welcome = () => {
  return (
    <div className="hidden h-full w-full items-center  justify-center border-l border-color2 bg-color2  sm:hidden md:hidden lg:flex">
      <div className="flex flex-col items-center justify-between">
        <img src={BgIntro} alt="Background" className="h-[22rem] w-[22rem]" />
        <h1 className="text-color3 mb-3 text-3xl">WhatsApp Web</h1>
        <p className="text-color4 text-sm">
          Kirim dan terima pesan tanpa perlu menghubungkan telepon Anda ke
          Internet.
        </p>
        <p className="text-color4 text-sm">
          Gunakan WhatsApp di maksimal 4 perangkat tertaut dan 1 telepon
          sekaligus.
        </p>
        <div className="text-color5 flex flex-row items-center justify-center text-sm">
          <img src={IcLock} className="mr-2 h-[0.9rem] w-[0.9rem]" />
          Pesan pribadi Anda terenkripsi secara end-to-end
        </div>
      </div>
    </div>
  );
};

export default Welcome;
