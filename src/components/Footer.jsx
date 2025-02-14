import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Subashvel. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="" className="underline hover:text-[#ffffff]">
            Subashvel
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
           href="https://github.com/Subashvel"
            className="hover:text-[#ffffff]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/subashvel/"
            className="hover:text-[#ffffff]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
                  href=""
                  className="hover:text-[#ffffff]"
                >
                  <FaGlobe size={29} />
                </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
