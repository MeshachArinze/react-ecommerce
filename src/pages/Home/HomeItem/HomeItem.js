import React from 'react';
import tvset from "../../../interior/tvset.jpg";
import tableset from "../../../interior/tableset.jpg";

const HomeItem = () => {
  return (
    <>
      <div className=" w-full h-full">
        <div className="animation-pulse bg-bgZinc py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tableset}
              alt="table"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tableset</span>
            <p className="text-veryDarkBlue text-lg font-sans">20 by 20</p>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tvset}
              alt="tvset"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tvset</span>
            <p className="text-veryDarkBlue text-lg font-sans">10 by 10</p>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tableset}
              alt="table"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tableset</span>
            <p className="text-veryDarkBlue text-lg font-sans">20 by 20</p>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tvset}
              alt="tv"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tvset</span>
            <p className="text-veryDarkBlue text-lg font-sans">10 by 10</p>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tableset}
              alt="table"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tableset</span>
            <p className="text-veryDarkBlue text-lg font-sans">20 by 20</p>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 object-cover mx-auto"
              src={tvset}
              alt="tv"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tvset</span>
            <p className="text-veryDarkBlue text-lg font-sans">10 by 10</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeItem;