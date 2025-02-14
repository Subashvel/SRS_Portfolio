const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <a href="https://food-order-app-subashvel.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\foodready.jpg"
              alt="Food Order App"
              className="mb-4 w-full h-auto md:h-72 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Food Order App</div>
            <p className="text-base text-gray-700 mb-2">
            The Food Order app lets users customize and order food with an &apos;add to cart&apos; feature, while admins manage the menu via Firestore. Built with React, Redux, Firebase, Framer Motion, and Tailwind CSS.
            </p>
            <a
              href="https://food-order-app-subashvel.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 2 */}
          <a href="https://health-plus-pearl.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\health.jpg"
              alt="Health Plus"
              className="mb-4 w-full h-auto md:h-72 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Health Plus</div>
            <p className="text-base text-gray-700 mb-4">
            Health Plus provides easy access to healthcare, allowing users to connect with doctors, book appointments, and get medical advice. Built with React, Redux, and React Router DOM.
            </p>
            <a
              href="https://health-plus-pearl.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 3 */}
          <a href="https://subashvel-banklandingpage.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\easybank.jpg"
              alt="Easy Bank Landing Page"
              className="mb-4 w-full h-auto md:h-72 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Easy Bank LandingPage</div>
            
            <p className="text-base text-gray-700 mb-4">
            Easy Landing Page is a responsive website designed for seamless user experience across all devices. Built with HTML, CSS, and JavaScript.
            </p>
            <a
              href="https://subashvel-banklandingpage.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 4 */}
          <a href="https://crowdfunding-product-page-chi-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\crowdfund.jpg"
              alt="Crowdfunding Product Page"
              className="mb-4 w-full h-auto md:h-72 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Crowdfunding Product page</div>
       
            <p className="text-base text-gray-700 mb-4">
            The Crowdfunding Product Page is a responsive platform that showcases projects, allowing users to explore, support, and contribute.
            </p>
            <a
              href="https://crowdfunding-product-page-chi-vert.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 5 */}
          <a href="https://card-detail.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\atmcard.jpg"
              alt="Card Detail Form"
              className="mb-4 w-full h-auto md:h-60 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Card Detail Form</div>
     
            <p className="text-base text-gray-700 mb-4">
            The Card Detail Form validates user input using JavaScript for accuracy and security.
            </p>
            <a
              href="https://card-detail.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 6 */}
          <a href="https://subashvel.github.io/multipage-form/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\multipageform.jpg"
              alt="Multi-page Form"
              className="mb-4 w-full h-auto md:h-60 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Multi-page Form</div>
         
            <p className="text-base text-gray-700 mb-4">
              BBuilt a multi-page form using React.js for seamless user input and navigation.
            </p>
            <a
              href="https://subashvel.github.io/multipage-form/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 7 */}
          <a href="https://subashvel-tip-calculator.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\tipcalc.jpg"
              alt="Tip Calculator"
              className="mb-4 w-full h-auto md:h-60 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Tip Calculator</div>
          
            <p className="text-base text-gray-700 mb-4">
            Developed a Tip Calculator in React.js for quick and easy bill splitting.
            </p>
            <a
              href="https://subashvel-tip-calculator.netlify.app/"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>

          {/* Card 8 */}
          <a href="https://github.com/Subashvel/Employee-Management-System" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img
              src="\projects\employee.jpg"
              alt="Employee Management"
              className="mb-4 w-full h-auto md:h-60 object-cover rounded transition-transform duration-200 hover:scale-105"
            />
            <div className="text-[#fe5617] text-lg font-bold">Employee Management</div>
        
            <p className="text-base text-gray-700 mb-4">
            Developed a Python-based Employee record using Tkinter and SQLite for record management.
            </p>
            <a
              href="https://github.com/Subashvel/Employee-Management-System"
              target="_blank" rel="noopener noreferrer"
              className="text-[#fe5617] font-bold text-base hover:underline"
            >
              Live Demo
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
