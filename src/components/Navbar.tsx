import { useNavigate } from "react-router-dom";
import { Page } from "../config/pages";

interface NavbarProps {
  navbarItems: Page[];
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full bg-white flex flex-row justify-center items-center gap-x-8">
      {props.navbarItems.map((navbarItem) => (
        <div
          className="font-semibold hover:underline hover:text-color-primary hover:cursor-pointer"
          onClick={() => navigate(navbarItem.path)}
        >
          {navbarItem.title}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
