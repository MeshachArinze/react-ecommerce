import End from './end/End';
import Form from './form/Form';
import List from './list/List';
import NewsLetter from './newsletter/NewsLetter';

const Footer = () => {

  return (
    <>
      <div className="gap-6 h-full w-full p-4 bg-darkGreyBlack">
        <div className="flex flex-col gap-6 text-center mb-10 md:flex-row justify-between items-center">
          <List />
        </div>
        <NewsLetter />
        <Form />
        <End />
      </div>
    </>
  );
}

export default Footer;