import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="overflow-hidden px-4 md:px-8 lg:px-16">
      <div className="w-full">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center relative space-y-8 md:space-y-0 md:space-x-8">
              {/* Image */}
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src="/client.jpg"
                  alt="Client"
                  className="rounded-full w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Card */}
              <div className="w-full md:w-[60%] px-6 md:px-12 py-4 bg-white flex flex-col shadow-md shadow-gray-700 hover:shadow-2xl hover:bg-slate-300">
                <h2 className="font-bold text-xl md:text-2xl uppercase text-[#03A7D3]">
                  Morojink
                </h2>
                <main className="uppercase text-red-600 text-sm md:text-base mb-3 md:mb-5">
                  Customer
                </main>
                <p className="text-sm md:text-[18px] tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Repeat Slide Structure for Other Slides */}
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center relative space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src="/client.jpg"
                  alt="Client"
                  className="rounded-full w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="w-full md:w-[60%] px-6 md:px-12 py-4 bg-white flex flex-col shadow-md shadow-gray-700 hover:shadow-2xl  hover:bg-slate-300">
                <h2 className="font-bold text-xl md:text-2xl uppercase text-[#03A7D3]">
                  Morojink
                </h2>
                <main className="uppercase text-red-600 text-sm md:text-base mb-3 md:mb-5">
                  Customer
                </main>
                <p className="text-sm md:text-[18px] tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
