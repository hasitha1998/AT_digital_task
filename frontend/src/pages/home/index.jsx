// Home.js
import React, { useState } from "react";
import { scroller } from "react-scroll";
import PageOne from "../pageOne/PageOne";
import PageTwo from "../pageTwo/PageTwo"; // Assuming PageTwo is in a folder named pageTwo

const Home = () => {
  const [currentPage, setCurrentPage] = useState("PageOne");

  const scrollToPage = (page) => {
    setCurrentPage(page);
    scroller.scrollTo(page, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="fade-in p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome! Click to start the journey.</h1>
        {currentPage === "Home" && (
          <button
            onClick={() => scrollToPage("PageOne")}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 mb-4"
          >
            Start
          </button>
        )}
      </div>

      <div name="PageOne" className="w-full">
        {currentPage === "PageOne" && <PageOne onNext={() => scrollToPage("PageTwo")} />}
      </div>

      <div name="PageTwo" className="w-full">
        {currentPage === "PageTwo" && <PageTwo />}
      </div>
    </div>
  );
};

export default Home;
