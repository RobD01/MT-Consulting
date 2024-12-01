import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks, business } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-4">
        <Link
          to="/"
          className="text-lg  bg-light-1 rounded-md text-stone-600 py-1 px-5 shadow-md border-b-4 border-emerald-400"
        >
          {business.name}
        </Link>

        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname == link.route;

            return (
              <li
                className={`leftsidebar-link group ${
                  isActive && "leftsidebar-link-active"
                }`}
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={` ${isActive && ""}`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default LeftSidebar;
