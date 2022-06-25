import React, { useState } from "react";
import { dataImg } from "../../../Data";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { img, title, text, details } = dataImg[index];
  const [show, setShow] = useState(false);

  const checkNumber = (number) => {
      if (number > dataImg.length - 1) {
          return 0
      }

      if (number < 0) {
          return dataImg.length - 1
      }

      return number;
  }

  const nextButton = () => {
    setIndex((index) => {
      let indexNum = index + 1;
      return checkNumber(indexNum);
    });
  };

  const prevButton = () => {
    setIndex((index) => {
      let indexNum = index - 1;
      return checkNumber(indexNum);
    });
  };


  return (
    <div className="bg-slate-900 w-full flex flex-col gap-24 flex-wrap justify-evenly md:flex-row">
      <div className="relative z-10 md:text-center lg:text-left flex-1 mt-12">
        <div className="relative flex flex-col items-center justify-center h-full">
          <p className=" bg-gradient-to-r text-center from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-3xl tracking-tight text-transparent">
            We are ready to give you our services.
          </p>
          <p className="mt-3 text-md text-center mx-auto max-w-md tracking-tight text-slate-400">
            you want to know more of us. get ready for our massive promo. we are
            here to give you our best.Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis ratione.
          </p>
          <div className="mt-8 flex justify-center space-x-4 md:justify-center lg:justify-start">
            <a
              className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 active:bg-sky-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50"
              href="/"
            >
              Get started
            </a>
            <a
              className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 active:text-slate-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              href="/"
            >
              view our page
            </a>
          </div>
        </div>
      </div>
      <article className="rounded flex flex-col flex-1 bg-slate-800">
        <div className="container">
          <div className="flex justify-center">
            <img
              src={img}
              alt={title}
              className="h-70 max-w-48 md:w-full md:h-48"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-center text-lightOrange">{title}</span>
          <span className="text-center text-lightOrange">{text}</span>
          <p className="px-12 m-8 text-center text-lightCream">
            {show ? details : `${details.substring(0, 100)}..`}
            {"   "}
            <button
              className="text-lightOrange space-x-4"
              onClick={() => setShow(!show)}
            >
              {show ? " show less" : " Read more"}
            </button>
          </p>
        </div>
        <div className="flex justify-around mb-4">
          <button
            className="flex bg-lightOrange p-3 text-priPink"
            onClick={prevButton}
          >
            {<FaChevronLeft />}
          </button>
          <button
            className="justify-end bg-lightOrange p-3  text-priPink"
            onClick={nextButton}
          >
            {<FaChevronRight />}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Review;
