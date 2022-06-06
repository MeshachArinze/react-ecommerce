import React, {useRef} from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {

  const currencyValue = {
    dol: "dollar",
    naira: "naira",
    yen: "yen",
    pounds: "pounds",
    euro: "euro"
  }

  const textRef = useRef();

  const setForm = (event) => {
    event.preventDefault();
    const entitle = textRef.current.value;
  };

  return (
    <>
      <div className=" h-full w-full p-4 bg-darkBlue ">
        <div className="flex flex-col gap-8 text-center mb-10 md:flex-row justify-between items-center">
          <div >
            <ul className="flex flex-col">
              <li>
                <a className="text-lightGray hover: pointer" href="#solution">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-lightGray">
                  Analytics
                </a>
              </li>
              <li>
                <a className="text-lightGray" href="#commerce">
                  Commerce
                </a>
              </li>
              <li className="text-lightGray">
                <a href="#insights">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-style-none flex flex-col">
              <li>
                <a href="#support" className="text-lightGray">
                  Support
                </a>
              </li>
              <li>
                <a href="#princing" className="text-lightGray">
                  Princing
                </a>
              </li>
              <li>
                <a href="#documentation" className="text-lightGray">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#guildes" className="text-lightGray">
                  Guildes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-style-none flex flex-col">
              <li>
                <a href="#company" className="text-lightGray">
                  Company
                </a>
              </li>
              <li className="text-lightGray">
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a className="text-lightGray" href="#job">
                  Job
                </a>
              </li>
              <li>
                <a href="#press" className="text-lightGray">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-style-none flex flex-col">
              <li>
                <a href="#legal" className="text-lightGray">
                  Legal
                </a>
              </li>
              <li>
                <a href="#claim" className="text-lightGray">
                  Claim
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-lightGray">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-lightGray">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-lightGray">Language & Currency</p>
            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
              <select className="w-1/3 mx-auto">
                <option value="">dollar</option>
                <option value={currencyValue.yen}>yen</option>
                <option value={currencyValue.euro}>euro</option>
                <option value={currencyValue.naira}>naira</option>
                <option value={currencyValue}>pounds</option>
              </select>
              <select className="w-1/3 mx-auto">
                <option value="">English</option>
                <option value="yen">spanish</option>
                <option value="euro">french</option>
                <option value="dutch">dutch</option>
                <option value="portuguse">portuguse</option>
              </select>
              <p></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row ">
          <div className="flex flex-col items-center text-lg gap-2 mb-8">
            <p className="text-priPink">Subscribe to our newslette</p>
            <p className="text-center text-priPink">
              The latest news, articles, and resouces, sent to your inbox
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={setForm}>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-4/6 px-8 py-2  rounded border-none" ref={textRef}
            />
            <button className="px-4 py-2 w-32 mx-auto rounded border-none bg-priPink text-lightGray">
              subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col h-32 justify-center items-center ">
          <p>develop by meshach</p>
          <div className="flex">
            <span>{<FaFacebook />}</span>
            <span>{<FaInstagram />}</span>
            <span>{<FaTwitter />}</span>
            <span>{<FaGithub />}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;