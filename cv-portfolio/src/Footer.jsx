import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center">
        <div>
          <div className="flex w-full gap-[800px] items-center bg-gray-950 py-3 rounded-full">
            <p className="text-gray-200 px-12 font-extralight">
              Connect with me
            </p>

            <div className="flex gap-3 items-center text-[#c79aff] px-10">
              <a href="https://github.com/Labi-Joy" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joy-eden-093a20305"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:joyayoeden@gmail.com" target="_blank" id="email">
                <IoMail />
              </a>
            </div>
          </div>

          <p className="py-3 px-6">Labi @ 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
