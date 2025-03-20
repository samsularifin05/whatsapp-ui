import { useEffect, useRef, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (active && title === "Setting") {
      setIsMenuOpen(true);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu({
          active: -1,
          title: "",
        });
        setIsMenuOpen(false); // Close menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active, setToggleMenu, title]);

  const handleLogout = () => {
    localStorage.setItem("IsLoading", "true");
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const handleKeluarClick = () => {
    handleLogout(); // Execute logout function
    setIsMenuOpen(false); // Close menu after logout function executed
  };

  return (
    <div
      className={active ? "ActiveButton" : "noActiveButton"}
      onClick={onClick}
    >
      <img src={img} alt={title} className="w-6 h-6 mx-3 rounded-full" />
      {active && title === "Setting" && isMenuOpen && (
        <div
          data-aos="fade-down"
          className={`bg-color8 text-color16 absolute left-[13rem] z-30 mt-[18rem] flex h-[15rem] w-[12.7rem] flex-col gap-3 rounded p-4`}
        >
          <p className="cursor-pointer">Group Baru</p>
          <p className="cursor-pointer">Komunitas Baru</p>
          <p className="cursor-pointer">Pesan Berbintang</p>
          <p className="cursor-pointer">Pilih Chat</p>
          <p className="cursor-pointer">Pengaturan</p>
          <p className="cursor-pointer" onClick={handleKeluarClick}>
            Keluar
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemIcon;
