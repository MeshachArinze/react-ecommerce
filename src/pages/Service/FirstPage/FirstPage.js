import React from 'react';
import layout from "../../../interior/layout.jpg";

const FirstPage = () => {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:-mt-[4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:-mt-[4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="grid max-w-full grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                We are ready to give you our services.
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                you want to know more of us. get ready for our massive promo.
                we are here to give you our best
              </p>
              <div className="mt-8 flex space-x-4 md:justify-center lg:justify-start">
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
          <div className='w-full'>
            <img src={layout} alt="" className='max-w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage