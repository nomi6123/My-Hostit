import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <div
      id="home"
      className="w-full  min-h-screen   bg-[#020230] flex justify-center items-center overflow-x-hidden"
    >
      <div className="w-full max-w-[1200px]">
        <Slider {...sliderSettings}>
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center px-4 sm:px-6 md:px-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center w-full">
                {/* Text Content */}
                <div className="bg-lime w-full md:w-[50%] lg:w-[40%] p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                  <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-white mb-4 sm:mb-6">
                    Fast & Secure <br /> Web Hosting
                  </h2>
                  <p className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                    Lorem ipsum text, clean and secure web hosting services
                    provided with quality and reliability.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button className="w-full sm:w-auto text-nowrap px-10 py-2 text-sm md:text-base bg-[#03A7D3] text-white font-bold rounded transition duration-500 hover:bg-transparent hover:text-[#03A7D3] border border-[#03A7D3]">
                      Read More
                    </button>
                    <button className="w-full sm:w-auto text-nowrap px-10 py-2 text-sm md:text-base bg-[#FF4646] text-white font-bold rounded transition duration-500 hover:bg-transparent hover:text-[#FF4646] border border-[#FF4646]">
                      Contact Us
                    </button>
                  </div>
                </div>
                {/* Image */}
                <div className="w-full md:w-[50%] lg:w-[35%] flex justify-center">
                  <img
                    src="/slider-img.png"
                    alt="Slider Image"
                    className="w-[80%] sm:w-[60%] md:w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
