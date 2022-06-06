import React from 'react'

const Categories = ({ categories, filterItem}) => {
  return (
    <div className="flex justify-center space-x-4 translate-y-32">
      {/* <button
        className="text-darkBlue px-8 py-3 rounded hover:bg-priPink"
        onClick={() => filterItem("all")}
      >
        all
      </button>
      <button
        className="text-darkBlue px-8 py-2 rounded hover:bg-priPink"
        onClick={() => filterItem("bed")}
      >
        bed
      </button> */}
      {categories.map((category,index) => {
        return (
          <div key={index} className="flex flex-wrap">
            <button
              type="submit"
              onClick={() => filterItem(category)}
              className="text-darkBlue p-1 rounded hover:bg-priPink"
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Categories