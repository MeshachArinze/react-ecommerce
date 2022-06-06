import React from 'react';
import tvset from "../../interior/tvset.jpg";
import tableset from "../../interior/tableset.jpg";

const HomeItem = () => {
  return (
    <>
      <div className="flex container h-full flex-col items-center space-x-6 md:flex-row md:space-y-6">
        <div className="grid grid-cols-1 items-center relative bg-lightGray">
          <div className="bg-lightGray mb-4">
            <img
              className="object-cover object-center mx-auto px-8 h-96 max-w-3/4"
              src={tvset}
              alt=""
            />
          </div>
          <div className="flex space-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-lg text-start text-brightRedSupLight hover:bg-veryPaleRed ">
              Minimal checklist
            </span>
            <button className="bg-darkBlue pointer px-2 whitespace-nowrap text-center">
              check it
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 justify-center">
          <div className="relative block">
            <img className="h-32 max-w-4/6" src={tableset} alt="" />
            <div className='text-sm'>
              <span>Tableset collection</span>
              <p>we off 50% discount</p>
              <button>pick</button>
            </div>
          </div>
          <div className="relative block">
            <div>
              <img className="h-32 max-w-4/6" src={tableset} alt="" />
              <div className='text-sm'>
                <span>Tableset collection</span>
                <p>we off 50% discount</p>
                <button>pick</button>
              </div>
            </div>
          </div>
          <div className="className='relative block' col-start-1 col-end-4">
            <img className="h-48 max-w-3/4" src={tableset} alt="" />
            <div className='text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <span>Tableset collection</span>
              <p>we off 50% discount</p>
              <button>pick</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeItem;