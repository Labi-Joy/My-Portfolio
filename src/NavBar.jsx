import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="text-[#c79aff] py-5 cursor-pointer flex justify-center">
      <nav className="flex items-center gap-10">
        <ul className="flex gap-10">
          <li className="hover:text-[#c79aff] text-white">about me</li>
          <li className="hover:text-white">education</li>
          <li className="hover:text-white">experience</li>
        </ul>
        <div className="flex gap-5 items-center">
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
      </nav>
    </div>
  );
};

export default NavBar;
