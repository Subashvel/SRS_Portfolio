import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF] mt-10">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I&apos;m <span className="text-[#fe5617]">R.Subashvel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I&apos;m a</span>
            <Typewriter
              options={{
                strings: ["Frontend Developer."],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate Frontend Developer with 1 year of experience, dedicated
            to building user-friendly web applications. I thrive on turning
            ideas into interactive experiences while continuously learning and
            innovating.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
           
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <a href="tel:7094955754" className="text-[#fe5617]">7094955754</a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <a href="mailto:srsubashvel2000@gmail.com" className="text-[#fe5617]">srsubashvel2000@gmail.com</a>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
            <a href="\R_Subashvel_FrontendDeveloper_Resume.pdf" download>Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-center md:justify-end items-center mt-12 md:mt-0">
          <img
            className="w-[80%] rounded-[20px] md:rounded-[50px]"
            src="\subashvel1.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
