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
    console.log(event);
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
      <form className="flex flex-col gap-4" onSubmit={setForm}>
        <input
          type="text"
          name="fullName"
          value={person.fullName}
          onChange={handleChange}
          ref={setRef}
          placeholder="enter your own name"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="w-4/6 px-8 py-2  rounded border-none"
          value={person.email}
          onChange={handleChange}
          ref={setRef}
        />
        <button className="bg-lightCream hover:bg-darkBlack cursor-pointer px-4 py-2 w-32 mx-auto rounded border-none bg-priPink text-lightGray">
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
