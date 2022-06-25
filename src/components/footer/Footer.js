import End from './end/End';
import Form from './form/Form';
import List from './list/List';
import NewsLetter from './newsletter/NewsLetter';

const listData = [
  {
    id: 1,
    url: "#solution",
    text: {
      job: "solution",
      map: "pricing",
      land: "guildes",
      about: "about"
    },
  },
  {
    id: 2,
    url: "#analytics",
    text: {
      job: "analytics",
      map: "blog",
      land: "insight",
      doc: "documentation"
    },
  },
  {
    id: 3,
    url: "#commerce",
    text: {
      job: "resources",
      map: "list",
      land: "news",
      about: "site"
    },
  },
  {
    id: 4,
    url: "#insights",
    text: {
      job: "job",
      map: "map",
      land: "land",
      about: "about",
    },
  },
];


const Footer = () => {

  return (
    <>
      <div className="gap-6 h-full w-full p-4 bg-darkGreyBlack">
        <div className="flex flex-col gap-14 text-center mb-10 md:flex-row justify-between items-center">
          <List listData={listData}/>
        </div>
        <NewsLetter />
        <Form />
        <End />
      </div>
    </>
  );
}

export default Footer;