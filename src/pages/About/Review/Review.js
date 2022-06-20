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
    <div className="container mx-auto">
      <article className="rounded flex flex-col bg-darkGrayishBlue">
        <div className="container">
          <div className="p-4 flex justify-center">
            <img src={img} alt={title} className="h-96 max-w-full" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-center text-lightGray">{title}</span>
          <span className="text-center text-lightGray">{text}</span>
          <p className="space-x-2 m-8 text-center text-lightGray">
            {show ? details : `${details.substring(0, 100)}..`}
            {"   "}
            <button
              className="text-priPink space-x-4"
              onClick={() => setShow(!show)}
            >
              {show ? " show less" : " Read more"}
            </button>
          </p>
        </div>
        <div className="flex justify-between space-x-96 ">
          <button className="flex bg-lightOrange p-3 justify-start translate-x-4 text-priPink" onClick={prevButton}>
            {<FaChevronLeft />}
          </button>
          <button className="justify-end bg-lightOrange p-3 -translate-x-6 text-priPink" onClick={nextButton}>
            {<FaChevronRight />}
          </button>
        </div>
      </article>
    </div>
  );
};

export default Review;
