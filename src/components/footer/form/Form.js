import React, { useState, useRef, useEffect } from "react";

const Form = () => {
  const [person, setPerson] = useState({ fullName: "", email: "" });
  const [people, setPeople] = useState([]);

  const setRef = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const setForm = (event) => {
    const getRef = setRef.current.value;
    console.log(getRef);
    event.preventDefault();
    if (person.email && person.fullName) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ fullName: "", email: "" });
    }
  };

  useEffect(() => {
    setRef.current.focus();
  });
  return (
    <>
      <form
        className="w-full flex flex-col items-center justify-center mb-10"
        onSubmit={setForm}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:space-x-8">
          <div className="w-full">
            <input
              type="text"
              name="fullName"
              value={person.fullName}
              onChange={handleChange}
              ref={setRef}
              placeholder="enter your own name"
              className=" w-full  px-8 py-2 mb-8 outline-none md:px-16"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="w-full  px-8 py-2 rounded border-none mb-6 outline-none"
              value={person.email}
              onChange={handleChange}
              ref={setRef}
            />
          </div>
        </div>
        <button className="bg-lightOrange text-lightCream  hover:bg-lightCream hover:text-darkGreyBlack cursor-pointer px-4 py-2 w-32 mx-auto rounded border-none bg-priPink text-lightGray">
          subscribe
        </button>
        {people.map((item) => {
          const { id, fullName, email } = item;
          return (
            <div key={id}>
              <div>
                <p>
                  {fullName}: {email}
                </p>
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default Form;
