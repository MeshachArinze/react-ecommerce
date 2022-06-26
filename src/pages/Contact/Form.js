import React, {useState, useEffect, useRef} from 'react';
const Form = () => {

    const [text, setText] = useState({
      id: null,
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      textarea: "",
      aboutus: "",
    });

    const [people, setPeople] = useState([]);

    const setRef = useRef(null);

    const handleChange = ({ target }) => {
      setText({ ...text, [target.name]: target.value });
    };

    const onSubmit = (event) => {
        const getRef = setRef.current.value;
        console.log(getRef);
        event.preventDefault();
        if ((text.firstname && text.lastname) || (text.email && text.company) || (text.textarea && text.aboutus)) {
          const newPerson = { ...text, id: new Date().getTime().toString() };
          setPeople([...people, newPerson]);
          setText({ firstname: "", lastname: "",  email: "", company: "", textarea: "", aboutus: "" });
        }
    };

    useEffect(() => {
      setRef.current.focus();
    });
  return (
    <div className="my-8 block mx-9">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div className="block mb-16 ">
            <label htmlFor="firstname" className="text-lightCream text-lg">
              first Name
            </label>
            <input
              type="text"
              name="firstname"
              className="border-none text-left border  outline-none px-14 py-2 rounded w-full"
              value={text.firstname}
              onChange={handleChange}
              ref={setRef}
            />
          </div>
          <div className="block mb-16 ">
            <label htmlFor="lastname" className="text-lightCream text-lg">
              lastName
            </label>
            <input
              type="text"
              name="lastname"
              className="border-none text-left outline-none px-14 py-2 rounded w-full "
              value={text.lastname}
              onChange={handleChange}
              ref={setRef}
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
            className="border-none text-left  outline-none  py-2 px-10 rounded w-full md:px-60"
            value={text.email}
            onChange={handleChange}
            ref={setRef}
          />
        </div>
        <div className="block mb-16 ">
          <label htmlFor="company" className="text-lightCream text-lg">
            company
          </label>
          <input
            type="text"
            name="company"
            className="border-none text outline-none px-10 py-2 rounded w-full md:px-60"
            value={text.company}
            onChange={handleChange}
            ref={setRef}
          />
        </div>
        <div className="mb-10">
          <textarea
            cols="98"
            rows="8"
            className="rounded w-full border-none outline-none"
            placeholder="pls send us a message"
            value={text.textarea}
            onChange={handleChange}
            ref={setRef}
          />
        </div>
        <div className="block mb-16 ">
          <label htmlFor="message" className="text-lightCream">
            how did you hear about us
          </label>
          <input
            type="text"
            name="aboutus"
            className="py-2 w-full rounded border-none outline-none md:px-44"
            value={text.aboutus}
            onChange={handleChange}
            ref={setRef}
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
  );
}
export default Form;