import React from 'react';
import tvset from "../../../interior/tvset.jpg";
import tableset from "../../../interior/tableset.jpg";

const HomeItem = () => {
  return (
    <>
      {/* <div className=" w-full h-full">
        <div className="animation-pulse bg- py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center relative">
            <img
              className="rounded w-3/4 h-3/4 origin-top-left transition-all duration-700  hover:scale-90 hover:skew-x-1 object-cover mx-auto"
              src={tableset}
              alt="table"
            />
            <div className="absolute top-3/4 left-3/4 hidden opacity-0 hover:opacity-100 hover:block hover:">
              <span className="text-veryDarkBlue text-lg font-sans">
                tableset
              </span>
              <p className="text-veryDarkBlue text-lg font-sans">20 by 20</p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="rounded w-3/4 h-3/4 origin-center transition-all duration-1000  hover:scale-90 hover:skew-x-1 object-cover mx-auto"
              src={tvset}
              alt="tvset"
            />
            <span className="text-veryDarkBlue text-lg font-sans">tvset</span>
            <p className="text-veryDarkBlue text-lg font-sans">10 by 10</p>
          </div>
          <div className="text-center">
            <img
              className="rounded  w-3/4 h-3/4 hover:-rotate-45 object-cover mx-auto"
              src={tableset}
              alt="table"
            />
            <span className="text-veryDarkBlue text-lg font-sans">
              tableset
            </span>
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
            <span className="text-veryDarkBlue text-lg font-sans">
              tableset
            </span>
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
      </div> */}
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 class="text-2xl font-extrabold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tvset}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#table">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>

              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tableset}
                    alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#set">
                    <span class="absolute inset-0"></span>
                    Self-Improvement
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Journals and note-taking
                </p>
              </div>

              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tvset}
                    alt="Collection of four insulated travel bottles on wooden shelf."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#table">
                    <span class="absolute inset-0"></span>
                    Travel
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Daily commute essentials
                </p>
              </div>
              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tvset}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#table">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>

              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tvset}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#table">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>

              <div class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={tvset}
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#table">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">
                  Work from home accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeItem;