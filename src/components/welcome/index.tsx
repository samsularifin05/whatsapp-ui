import { BgIntro, IcLock } from "../../assets";

const Welcome = () => {
  return (
    <div className="hidden h-full w-full items-center  justify-center border-l border-color2 bg-color2  sm:hidden md:hidden lg:flex">
      <div className="flex flex-col items-center justify-between">
        <img src={BgIntro} alt="Background" className="h-[22rem] w-[22rem]" />
        <h1 className="mb-3 text-3xl text-color3">WhatsApp Web</h1>
        <p className="text-sm text-color4">
          Kirim dan terima pesan tanpa perlu menghubungkan telepon Anda ke
          Internet.
        </p>
        <p className="text-sm text-color4">
          Gunakan WhatsApp di maksimal 4 perangkat tertaut dan 1 telepon
          sekaligus.
        </p>
        <div className="mt-20 flex flex-row items-center justify-center text-sm text-color5">
          <img src={IcLock} className="mr-2  h-[0.9rem] w-[0.9rem]" />
          Pesan pribadi Anda terenkripsi secara end-to-end
        </div>
      </div>
    </div>
  );
};

export default Welcome;
