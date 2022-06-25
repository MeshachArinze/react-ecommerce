import React, {useState} from 'react';

const Item = (props) => {
    const [readmore, setReadmore] = useState(false);

    let { title, price, text } = props.fields;
    const image = props.fields.image.fields.file.url;
    let {id,removeTour} = props;
  return (
    <>
      <article className="overflow-hidden py-6 bg-slate-800 pb-4 h-full grid grid-cols-1 justify-around md:grid-cols-2 ">
        <div className="mb-8 px-9 h-80 flex justify-self-center">
          <img
            className="max-w-1/2 h-full mx-auto md:max-w-md object-cover rounded"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col mr-4 h-66 bg-bgBlue700 px-9 items-self-center">
          <span className="flex flex-row justify-between mb-8">
            <h4 className="text-lightOrange">{title}</h4>
            <h4 className="text-lightOrange">${price}</h4>
          </span>
          <p className="text-darkBlue">
            {readmore ? text : `${text.substring(0, 200)}`}
            <button
              className="border-none px-2 ml-4 rounded text-lightOrange"
              onClick={() => setReadmore(!readmore)}
            >
              {readmore ? "Show less" : "Read more"}
            </button>
          </p>
          <button
            onClick={() => removeTour(id)}
            className="border-none bg-lightOrange text-lightCream rounded w-32 m-auto cursor-pointer px-4 py-2"
          >
            close
          </button>
        </div>
      </article>
    </>
  );
}

export default Item