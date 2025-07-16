import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS_AND_PATHS = [
  { link: "ABOUT US", path: "/about-us" },
  { link: "PRODUCTS", path: "/products" },
  { link: "ARTICLES", path: "/articles" },
  { link: "CAREER", path: "/career" },
  { link: "CONTACT US", path: "/contact-us" },
];

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-svw flex items-center justify-between px-20 py-5 border-bawah">
      <NavLink to="/" className="logo">
        <img src="logo.webp" className=" w-15" alt="Logo" />
      </NavLink>
      <div className="links flex justify-between gap-3">
        {LINKS_AND_PATHS.map((element, index) => (
          <Link key={index} path={element.path} text={element.link} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;

function Link({ path, text }: { path: string; text: string }) {
  return (
    <NavLink
      to={`${path}`}
      className={({ isActive, isPending }) =>
        `text-capital-thin  text-[#376240] ${
          text == "CONTACT US"
            ? "border-rounded bg-[#376240] text-[#F1F1EB] hover:bg-transparent hover:text-[#376240]"
            : "hover:underline hover:underline-offset-8"
        }
        ${
          isPending
            ? "underline underline-offset-1"
            : isActive && "underline underline-offset-1"
        }`
      }
    >
      {text}
    </NavLink>
  );
}
