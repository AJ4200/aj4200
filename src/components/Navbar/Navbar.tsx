import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import { getTextColor } from "../../lib/navbarUtils";
import { FaGithubAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { asPath } = router;

  const navshadow = (path: string) => {
  switch (path) {
    case "/about":
      return "black 1px 1px 1px";
    case "/services":
      break;
    default:
      break;
  }
}

  return (
    <nav
      className="logo md:sticky text-shadow flex filter drop-shadow-md bg-transparent backdrop-blur-md px-4 py-4 h-20 items-center z-[99999]"
      style={{ textShadow: navshadow(asPath) } }
    >
      <MobileNavbar open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        {open ? (
          ""
        ) : (   <><a className="git-header mx-2 text-3xl" href="https://github.com/aj4200"><FaGithubAlt /></a><a className="text-2xl font-semibold" href="/">
            <b className="flex">
              #a<span>j</span>4<span>2</span>00 {asPath}
            </b>
          </a></>
        )}
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className=" flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[var(--neon)] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-[var(--neon)] rounded-lg transition-all duration-300 ease-in-out ${
              open ? "bg-transparent" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[var(--neon)] rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex">
          <NavLink to="/home" text_color={getTextColor("/home")}>
            HOME
          </NavLink>
          <NavLink to="/about" text_color={getTextColor("/about")}>
            ABOUT
          </NavLink>
          <NavLink to="/portfolio" text_color={getTextColor("/portfolio")}>
            PORTFOLIO
          </NavLink>
          <NavLink to="/services" text_color={getTextColor("/services")}>
            SERVICES
          </NavLink>
          <NavLink to="/contact" text_color={getTextColor("/contact")}>
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
