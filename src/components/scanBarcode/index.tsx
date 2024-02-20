import { BarcodeImg } from "../../assets";

interface Props {
  onClick: () => void;
}
const ScanBarcode = (props: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <div className="lg:bg-color9 flex h-56 flex-1 items-center justify-center bg-white">
        <div className="flex flex-col gap-2 rounded-lg bg-white p-16 lg:absolute lg:mt-96">
          <h1 className="text-color7 lg:text-[30px]">
            Gunakan WhatsApp di komputer Anda
          </h1>
          <ol type="1" className="flex flex-col gap-3 lg:mt-10">
            <li>Buka WhatsApp di telepon Anda</li>
            <li>
              <span>2. Ketuk </span>
              <strong> Menu </strong> di Android, atau{" "}
              <strong>Pengaturan </strong> di iPhone
            </li>
            <li>
              <span>3. Ketuk </span>
              <strong> Perangkat tertaut</strong> lalu{" "}
              <strong> Tautkan perangkat</strong>
            </li>
            <li>
              <span>
                4. Arahkan telepon Anda di layar ini untuk memindai kode QR
              </span>
            </li>
          </ol>
          <div className="flex justify-center">
            <img
              src={BarcodeImg}
              alt="QR Code"
              className="h-52 xs:h-24 md:h-52 lg:h-72"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={props.onClick}
              className="bg-color9 flex w-36 justify-center rounded p-2 text-white"
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
      <div className="bg-color1 lg:flex-1"></div>
    </div>
  );
};

export default ScanBarcode;
