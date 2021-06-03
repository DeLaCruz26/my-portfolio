import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="bg-indigo-900">
      <div className="max-w-8xl px-10 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div className="flex">
              <NavLink
                to="/"
                exact
                activeClassName="text-white"
                className="py-4 px-3 text-indigo-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest transition duration-300"
              >
                DF
              </NavLink>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink
                to="/post"
                className="py-4 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
                activeClassName="text-indigo-50 bg-indigo-700 rounded"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/project"
                className="py-4 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
                activeClassName="text-indigo-50 bg-indigo-700 rounded"
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className="py-4 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
                activeClassName="text-indigo-50 bg-indigo-700 rounded"
              >
                About
              </NavLink>
            </div>
          </div>
          {/* social links */}
          <div className="hidden md:flex items-center">
            <SocialIcon
              url="https://github.com/DeLaCruz26"
              className="mr-3"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/dametrik-fick-34971913a/"
              className="mr-3"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCGqCUBv6EGv7OBuajQUZ3oQ"
              className="mr-3"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
          {/* menu button */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={
          isOpen ? "grid grid-rows-3 transition duration-300" : "hidden"
        }
      >
        <NavLink
          to="/post"
          className="py-3 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
          activeClassName="text-indigo-50 bg-indigo-700 rounded"
        >
          Blogs
        </NavLink>
        <NavLink
          to="/project"
          className="py-3 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
          activeClassName="text-indigo-50 bg-indigo-700 rounded"
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className="py-3 px-3 text-indigo-100 hover:text-gray-800 transition duration-300"
          activeClassName="text-indigo-50 bg-indigo-700 rounded"
        >
          About
        </NavLink>
        <div>
          <SocialIcon
            url="https://github.com/DeLaCruz26"
            className="mr-3 mb-3 ml-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/dametrik-fick-34971913a/"
            className="mr-3 mb-3 ml-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCGqCUBv6EGv7OBuajQUZ3oQ"
            className="mr-3 mb-3 ml-2"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
