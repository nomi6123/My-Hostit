import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="w-full min-h-screen bg-white flex justify-center items-center py-10 sm:py-20">
        <div className="w-full mx-auto max-w-[1300px] flex flex-col md:flex-row justify-center items-center px-5 md:px-10 gap-5 md:gap-10">
          <div className="w-full md:w-[50%] lg:w-[45%] py-5 px-3 md:px-5 flex flex-col items-start gap-7">
            <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">
              About Us
            </h2>
            <p className="font-semibold text-[#999A99] text-sm sm:text-base md:text-lg tracking-tighter">
              Words which don't look even slightly believable. If you are going
              to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text. All the Lorem
              Ipsum generators on the Internet tend to repeat predefined chunks
            </p>
            <button
              className="w-fit h-fit sm:w-auto text-nowrap px-6 sm:px-10
             py-2 text-sm md:text-base bg-[#FF4646] text-white font-bold rounded 
             transition duration-500 hover:bg-transparent hover:text-[#FF4646] border
              border-[#FF4646] transform hover:scale-105"
            >
              Read more
            </button>
          </div>
          <div className="w-full md:w-[50%] lg:w-[45%] flex justify-center">
            <img
              src="/about-img.png"
              alt="About Us Image"
              className="w-[80%] sm:w-[60%] md:w-[70%] lg:w-[80%] h-auto max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;












   {/* <div className="flex justify-center mt-10 group-hover:bg-black  space-x-36 w-full items-center flex-wrap gap-5 mx-auto max-w-[1300px]">
          <button
            className="w-fit h-fit sm:w-auto text-nowrap px-6 sm:px-10
             py-2 text-sm md:text-base bg-[#FF4646] text-white font-bold rounded-[8px] 
             transition duration-500 hover:bg-[#03A7D3] group-hover:text-white border
              border-[#03A7D3] transform group-hover:scale-105"
          >
            See Detail
          </button>
          <button
            className="w-fit h-fit sm:w-auto text-nowrap px-6 sm:px-10
             py-2 text-sm md:text-base bg-[#FF4646] text-white font-bold rounded-[8px] 
             transition duration-500 hover:bg-[#03A7D3] group-hover:text-white border
              border-[#03A7D3] transform hover:scale-105"
          >
            See Detail
          </button>
          <button
            className="w-fit h-fit sm:w-auto text-nowrap px-6 sm:px-10
             py-2 text-sm md:text-base bg-[#FF4646] text-white font-bold rounded-[8px] 
             transition duration-500 hover:bg-[#03A7D3] group-hover:text-white border
              border-[#03A7D3] transform hover:scale-105"
          >
            See Detail
          </button>
        </div>  */}