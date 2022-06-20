import React from 'react'

const NewsLetter = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mb-8 items-center justify-between md:flex-row ">
        <div className="flex flex-col items-center text-lg gap-2 mb-8">
          <p className="text-darkGreyBlack">Subscribe to our newslette</p>
          <p className="text-center text-priPink">
            The latest news, articles, and resouces, sent to your inbox
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsLetter