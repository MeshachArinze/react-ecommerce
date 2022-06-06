import React, {useState} from 'react';

const Item = (props) => {
    const [readmore, setReadmore] = useState(false);

    let { title, price, text } = props.fields;
    const image = props.fields.image.fields.file.url;
    let {id,removeTour} = props;
  return (
    <>
      <article className="h-full gap-[2.2rem] grid grid-cols-1 px-8 py-7">
        <div>
          <img
            className="w-full object-cover block rounded"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="flex flex-row justify-between">
            <h4 className="text-orange">{title}</h4>
            <h4>${price}</h4>
          </span>
          <p className="mb-8">
            {readmore ? text : `${text.substring(0, 200)}`}
            <button
              className="border-none px-2 py-1 ml-4 rounded text-lightOrange"
              onClick={() => setReadmore(!readmore)}
            >
              {readmore ? "Show less" : "Read more"}
            </button>
          </p>
          <button
            onClick={() => removeTour(id)}
            className="border-none bg-priPink text-lightGray rounded w-32 m-auto cursor-pointer px-4 py-2"
          >
            close
          </button>
        </div>
      </article>
    </>
  );
}

export default Item