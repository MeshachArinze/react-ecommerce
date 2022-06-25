import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-darkBlue to-bgBlue700 w-full h-full">
        <div className="flex flex-col p-2 md:">
          <div className="block p-2">
            <h1 className="text-bgBlue700 text-center">let work together </h1>
            <p className="text-lightCream max-w-1/2 mx-auto text-center">
              We'd love to hear from you. send us a message via form or email
              us. you can also send us message via whatsapp
            </p>
          </div>
          <div className="my-8 block mx-9">
            <form className="flex flex-col items-center">
              <div className="flex flex-col md:flex-row md:space-x-5">
                <div className="block mb-16 ">
                  <label
                    htmlFor="firstname"
                    className="text-lightCream text-lg"
                  >
                    first Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="border-none text-left border  outline-none px-14 py-2 rounded w-full"
                  />
                </div>
                <div className="block mb-16 ">
                  <label htmlFor="lastname" className="text-lightCream text-lg">
                    lastName
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="border-none text-left outline-none px-14 py-2 rounded w-full"
                  />
                </div>
              </div>
              <div className="block mb-16 ">
                <label htmlFor="lastname" className="text-lightCream text-lg">
                  your email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-none text-left  outline-none  py-2 px-10 rounded w-full"
                />
              </div>
              <div className="block mb-16 ">
                <label htmlFor="company" className="text-lightCream text-lg">
                  company
                </label>
                <input
                  type="text"
                  name="company"
                  className="border-none text outline-none px-10 py-2 rounded w-full"
                />
              </div>
              <div className="mb-10">
                <textarea
                  cols="98"
                  rows="8"
                  className="rounded w-full border-none outline-none"
                  placeholder="pls send us a message..."
                />
              </div>
              <div className="block mb-16 ">
                <label htmlFor="message" className="text-lightCream">
                  how did you hear about us
                </label>
                <input
                  type="text"
                  name="name"
                  className="  py-2 w-full rounded border-none outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-fushia via-lightOrange to-pink-500 hover:fuchsia-600 text-lightCream w-32  py-3 px-10 rounded-4xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;