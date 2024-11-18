const Contact = () => {
  return (
    <div id="contact" className="relative w-full bg-white min-h-screen">
      {/* Contact Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-black text-3xl font-bold mb-10 tracking-tight mt-8">
          Get In Touch
        </h2>

        <form className="flex mx-auto flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[50%] gap-3 px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 lg:p-3 mb-4 bg-white border outline-none border-gray-400 rounded text-black placeholder-gray-500 placeholder:font-semibold text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 lg:p-3 mb-4 bg-white border outline-none border-gray-400 rounded text-black placeholder-gray-500 placeholder:font-semibold text-base"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="p-2 lg:p-3 mb-4 bg-white border outline-none border-gray-400 rounded text-black placeholder-gray-500 placeholder:font-semibold text-base"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-2 lg:p-4 mb-4 bg-white border outline-none border-gray-400 rounded text-black placeholder-gray-500 placeholder:font-semibold text-base"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center mx-auto w-fit px-16 py-4 mt-2 text-sm md:text-base lg:text-[18px]
            bg-red-600 text-white border  border-transparent font-semibold 
            hover:bg-transparent hover:text-red-600 hover:border-red-600 
            transition duration-500"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;





// // 


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// 