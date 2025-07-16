import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS_AND_PATHS = [
  { link: "About us", path: "/about-us" },
  { link: "Products", path: "/products" },
  { link: "Articles", path: "/articles" },
  { link: "Career", path: "/career" },
  { link: "Contact us", path: "/contact-us" },
];

const CONTACTS = [
  { text: "+62 85158500644", image: "wa.webp" },
  { text: "@kunanta", image: "ig.webp" },
  { text: "kunanta", image: "shopee.webp" },
  { text: "kunanta", image: "tokped.webp" },
];

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  border-y-2 border-[#376240]">
        <div className="kiri flex flex-col  gap-10   footer-garis w-1/4">
          <img src="logo.webp" alt="logo" className="w-35" />
          <p className="footer-title">Kembali ke Alami dengan Sunnah</p>
        </div>
        <div className="flex flex-col gap-4  footer-garis w-1/5">
          <div className="flex flex-col gap-4">
            <p className="footer-title mb-2">Explore</p>
            {LINKS_AND_PATHS.map((el) => (
              <NavLink className={`text-[#376240] font-semibold`} to={el.path}>
                {el.link}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4  footer-garis w-1/4">
          <div className="flex flex-col gap-4">
            <p className="footer-title mb-2">Contact Us!</p>
            {CONTACTS.map((el) => (
              <div className="flex gap-2">
                <img src={el.image} alt="logo" className="size-6" />
                <a className={`text-[#376240] font-semibold`} href={el.text}>
                  {el.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="kanan flex flex-col  items-start w-1/3">
          <div className="location py-15 border-2 border-[#5C7F62] w-full px-20">
            <p className="footer-title mb-2">Location</p>
            <p className=" text-[#5C7F62] font-semibold w-80 ">
              CIBUBUR COUNTRY, RUKAN PLAZA 3 NO. 12 (DEKAT SEKOLAH ISLAM PELITA
              HATI), CIKEAS 16966, BOGOR, INDONESIA
            </p>
          </div>
          <div className="operational-hours py-10 w-full border-2 border-[#5C7F62] px-20">
            <p className="footer-title mb-2">Operational Hours</p>
            <p className=" text-[#5C7F62] font-semibold ">MON-FRI 9.00-17.00</p>
          </div>
        </div>
      </div>
      <LittleFooter />
    </>
  );
}

function LittleFooter() {
  return (
    <div className="flex justify-between px-30 py-2 bg-[#376240]">
      <div className="flex gap-15">
        <p>Term & Condition</p>
        <p>Privacy Policy</p>
      </div>
      <p>About This Project</p>
    </div>
  );
}

export default Footer;
