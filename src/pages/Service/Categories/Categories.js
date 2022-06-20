import React from 'react'

const Categories = ({ categories, filterItem}) => {
  return (
    <div className="flex justify-center space-x-4 translate-y-32">
      
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