import { NavLink } from "react-router-dom";
import {navLinks} from "../../data"

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center w-[75%] justify-between lg:w-4/5">
      <ul className="flex gap-8">
        {navLinks.map((item) => (
          <li key={item} className="text-dim-gray capitalize font-bold">
            <NavLink className="hover:text-yellow my-transition" to={item}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <button type="button" className="btn w-[180px]">
        get scootin
      </button>
    </nav>
  );
};
export default Navbar;