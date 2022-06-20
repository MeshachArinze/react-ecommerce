import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const End = () => {
  return (
    <>
      <div className="flex flex-col gap-6 h-32 justify-center items-center ">
        <p>develop by meshach</p>
        <div className="flex">
          <span>{<FaFacebook className="text-lightCream" />}</span>
          <span>{<FaInstagram />}</span>
          <span>{<FaTwitter />}</span>
          <span>{<FaGithub />}</span>
        </div>
      </div>
    </>
  );
};

export default End;
