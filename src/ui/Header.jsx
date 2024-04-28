import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 pt-2 text-gray-300 bg-black border-b border-gray-700 shadow-lg border-bottom ">
      <nav className="container flex items-center justify-between px-6 py-3 mx-auto">
        <NavLink
          to="/home"
          className="flex text-2xl font-bold underline decoration-slice decoration-blue-500"
        >
          <span className="text-purple-600 no-underline ">🌌</span>
          Nebulae
        </NavLink>
        <ul className="flex space-x-10">
          <li className="relative group">
            <NavLink
              to="/home"
              className="text-white transition-colors duration-300 hover:text-green-400"
            >
              🌎 Earth
            </NavLink>
            <ul className="absolute left-0 mt-2 space-y-2 text-black transition-opacity duration-200 bg-purple-400 shadow-md opacity-0 rounded-2xl group-hover:opacity-100 ">
              <li>
                <Link
                  to="/earth"
                  className="block px-4 py-1 transition-colors duration-300 hover:bg-purple-800 rounded-xl"
                >
                  Continent 1
                </Link>
              </li>
              <li>
                <Link
                  to="/earth/continent2"
                  className="block px-4 py-1 transition-colors duration-300 hover:bg-purple-800 rounded-xl"
                >
                  Continent 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <NavLink
              to="/earth"
              className="text-white transition-colors duration-300 hover:text-gray-300"
            >
              🔴 Mars
            </NavLink>
            <ul className="absolute left-0 mt-2 space-y-2 text-black transition-opacity duration-200 bg-white shadow-md opacity-0 group-hover:opacity-100">
              <li>
                <Link
                  to="/earth/continent1"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                >
                  Continent 1
                </Link>
              </li>
              <li>
                <Link
                  to="/earth/continent2"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                >
                  Continent 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <NavLink
              to="/earth"
              className="text-white transition-colors duration-300 hover:text-gray-300"
            >
              ✨ Solar System
            </NavLink>
            <ul className="absolute left-0 mt-2 space-y-2 text-black transition-opacity duration-200 bg-white shadow-md opacity-0 group-hover:opacity-100">
              <li>
                <Link
                  to="/earth/continent1"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                >
                  Continent 1
                </Link>
              </li>
              <li>
                <Link
                  to="/earth/continent2"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                >
                  Continent 2
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
