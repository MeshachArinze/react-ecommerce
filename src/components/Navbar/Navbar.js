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
      <div className="relative  w-full  p-4 md:container md:mx-auto">
        <nav className="flex flex-col justify-betweeen md:flex-row md:justify-between">
          <div className="flex md:flex-row md:justify-self-start">
            <span className="text-rose text-md capitalize">Shop</span>
            <span className="capitalise">All</span>
          </div>
          <div
            className={`flex flex-col md:block md:flex-row md:justify-center md:h-0 ${
              click ? "block" : "hidden"
            }`}
            ref={linksContainerRef}
          >
            <ul className="md:flex md:space-x-2 -translate-8" ref={linksRef}>
              {linked.map((link) => {
                const { id, url, text } = link;
                return (
                  <li
                    className="text-center space-y-2 leading-8 md:space-x-8 md:leading-0"
                    key={id}
                  >
                    <Link
                      className=" text-md font-sans hover:text-orange"
                      to={url}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" flex absolute top-10 -translate-x-10 -translate-y-3 self-end">
            {<FaBox className="text-orange" size="14" />}
            <span className="absolute  text-base rounded-fill -top-4 left-2 inline-block">
              {amount}
            </span>
          </div>
          <div
            className="absolute top-6 right-5 block md:hidden md:relative md:top-0 md:right-0"
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
