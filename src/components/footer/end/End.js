import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const End = () => {
  return (
    <>
      <div className="flex flex-col gap-6 h-32 justify-center items-center ">
        <p className="text-lightCream">develop by meshach</p>
        <div className=" flex flex-row justify-evenly ">
          <div className="text-lightCream me-10">{<FaFacebook />}</div>
          <div className="text-lightCream">{<FaInstagram />}</div>
          <div className="text-lightCream">{<FaTwitter />}</div>
          <div className="text-lightCream">{<FaGithub />}</div>
        </div>
      </div>
    </>
  );
};

export default End;
