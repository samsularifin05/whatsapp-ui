import { Logo } from "../../assets";

interface Props {
  progress: number;
}
const LoadingScreen = (props: Props) => {
  const { progress } = props;
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-color2">
      <img src={Logo} className="h-72 w-72" />
      <div className="-mt-20 w-[18rem] rounded-lg bg-gray-200 xs:w-[10rem] md:w-[25rem] lg:w-[25rem]">
        <div
          className="h-1 rounded-lg bg-color6"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
