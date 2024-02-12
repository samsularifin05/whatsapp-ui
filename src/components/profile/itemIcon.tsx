import { useEffect, useRef } from "react";
import { useContextApp } from "../../hooks";

interface ItemProps {
  img: string;
  title: string;
  active: boolean;
  onClick: () => void;
}

const ItemIcon = (props: ItemProps) => {
  const { img, onClick, title, active } = props;
  const menuRef = useRef<HTMLDivElement>(null);
  const { setToggleMenu } = useContextApp();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu({
          active: -1,
          title: "",
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick, setToggleMenu]);

  return (
    <div
      className={active ? "ActiveButton" : "noActiveButton"}
      onClick={onClick}
    >
      <img src={img} alt={title} className="mx-3 h-6 w-6 rounded-full" />
      {active && title === "Setting" && (
        <div
          ref={menuRef} // Mengaitkan ref ke menu untuk mengetahui apakah klik dilakukan di dalam atau di luar area menu
          data-aos="fade-down"
          className={`bg-color8 text-color6 absolute left-[13rem] z-30 mt-[18rem] flex h-[15rem] w-[12.7rem] flex-col gap-3 rounded p-4 `}
        >
          <p>Group Baru</p>
          <p>Komunitas Baru</p>
          <p>Pesan Berbintang</p>
          <p>Pilih Chat</p>
          <p>Pengaturan</p>
          <p>Keluar</p>
        </div>
      )}
    </div>
  );
};

export default ItemIcon;
