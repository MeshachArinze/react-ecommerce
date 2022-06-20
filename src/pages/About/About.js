
import bedwhite from "../../interior/bedwhite.jpg"
import Review from '../About/Review/Review';
import Feature from "../About/Feature/Feature";
import Form from './Form/Form';

const About = () => {

  return (
    <main className="">
      <section className="flex flex-col translate-y-8">
        <Review />
      </section>
      <div className="py-12 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <Feature />
        </div>
      </div>
      <div className="flex font-sans">
        <div className="flex-none w-56 relative">
          <img
            src={bedwhite}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>

        <Form />
      </div>
    </main>
  );
}

export default About