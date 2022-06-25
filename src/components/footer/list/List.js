import React from 'react';

const List = ({listData}) => {
  
  return (
    <>
      {listData.map((list) => {
        const { id, url, text: {job, map, land, about} } = list;
        return (
          <div key={id} className="mb-10">
            <ul className="flex flex-col ">
              <li>
                <a className="text-lightCream cursor-pointer block" href={url}>
                  <div>{job}</div>
                  <div>{map}</div>
                  <div>{land}</div>
                  <div>{about}</div>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default List