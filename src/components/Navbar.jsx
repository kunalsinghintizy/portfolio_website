import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  function toggleTheme() {
    if (darkMode) {
      console.log(darkMode);
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <nav
      className={
        darkMode
          ? "bg-white border-gray-200 shadow-2xl md:px-8 fixed w-full top-0"
          : "bg-black border-gray-200 shadow-2xl md:px-8 fixed w-full top-0"
      }
    >
      <div className="flex justify-between items-center px-2 py-4 mx-auto">
        <div className="flex items-center cursor-pointer">
          <span
            className={
              darkMode
                ? "text-xl font-medium text-decoration-none whitespace-nowrap dark:text-white"
                : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
            }
          >
            {`<ꪖꪖƙꪖకꫝ కꫝꪖꪹꪑꪖ/>`}
          </span>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto ">
          <ul
            class={
              "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
            }
          >
            {links.map((el) => (
              <li className="cursor-pointer">
                <Link
                  to={el.route}
                  activeClass={
                    darkMode
                      ? "text-black bg-blue-500"
                      : "text-white bg-blue-500"
                  }
                  spy={true}
                  smooth={true}
                  className={
                    darkMode
                      ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                      : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                  }
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={() => toggleTheme()}>
            {darkMode ? (
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                alt=""
              />
            ) : (
              <img
                src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                className="w-6 ml-6 cursor-pointer hover:scale-1.50 block" alt=""
              />
            )}
          </div>

          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? "hide" : "Show"}
          </button>
        </div>

        <div className="flex md:hidden items-center">
          <div onClick={() => toggleTheme()}>
            {darkMode ? (
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                className="w-6 mr-6 cursor-pointer hover:scale-1.50 block"
                alt=""
              />
            ) : (
              <img
                src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                alt=""
                className="w-6 mr-6 cursor-pointer hover:scale-1.50 block"
              />
            )}
          </div>

          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <img
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-menu-100-most-used-icons-flaticons-flat-flat-icons-2.png" alt=""
                className="w-8"
              />
            ) : (
              <img src="https://img.icons8.com/color-glass/48/000000/delete-sign.png" alt="" className="w-8"/>
            )}
          </div>
        </div>
      </div>
      {/* Mobile view nav bar */}
      {toggle && (
        <div className="bg-blue-100 py-2 px-2 md:p-0">
          <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
            {links.map((el) => (
              <Link
                to={el.route}
                activeClass={"text-white bg-gray-700"}
                className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                spy={true}
                smooth={true}
                onClick={() => setToggle(false)}
              >
                <li>{el.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
