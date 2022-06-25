import React, { useState, useEffect } from "react";
import { FaBox, FaBars, FaTimes } from "react-icons/fa";
import { getLinks } from "../../Data";
import { Outlet, Link } from "react-router-dom";
import { useRef } from "react"; 
import { useGlobalContext } from "../../pages/Cart/Context";


const Navbar = () => {
  const { amount } = useGlobalContext();
  
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const linked = getLinks();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect();
    if (click) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }else {
      linksContainerRef.current.style.height = "12rem";
    } 
  }, [click]);
  return (
    <>
      <div className="relative w-full bg-lightCream py-4 ">
        <nav className="flex flex-col justify-betweeen md:flex-row md:justify-between">
          <div className="flex justify-self-start text-bgZinc">
            <span className="text-rose text-md capitalize">Shop</span>
            <span className="capitalise">All</span>
          </div>
          <div
            className={`flex flex-col md:block md:flex-row md:justify-center md:h-0 ${
              click ? "block transition-all" : "hidden"
            }`}
            ref={linksContainerRef}
          >
            <ul className="md:flex md:space-x-2 translate-y-4 md:translate-y-0  transition" ref={linksRef}>
              {linked.map((link) => {
                const { id, url, text } = link;
                return (
                  <li
                    className="text-center space-y-2 leading-8 md:space-x-8 md:leading-0 md:bg-none"
                    key={id}
                  >
                    <Link
                      className=" text-md mr-4 font-sans text-darkGreyBlack hover:text-lightOrange"
                      to={url}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" flex absolute top-10 -translate-x-20 -translate-y-3 self-end text-bgZinc  md:translate-x-20">
            {<FaBox className="text-orange" size="14" />}
            <span className="absolute text-lightOrange text-base rounded-fill -top-4 left-2 inline-block">
              {amount}
            </span>
          </div>
          <div
            className="absolute top-6 right-5 block md:hidden md:relative text-bgZinc md:top-0 md:right-0"
            onClick={handleClick}
          >
            {click ? <FaTimes size="20" /> : <FaBars size="20" />}
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};


export default Navbar;
