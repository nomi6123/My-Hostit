import { MdOutlineArrowRightAlt } from "react-icons/md";

const services = [
  {
    img: "/s1.png",
    title: "Shared Hosting",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
  {
    img: "/s2.png",
    title: "Dedicated Hosting",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
  {
    img: "/s3.png",
    title: "Cloud Hosting",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
  {
    img: "/s4.png",
    title: "VPS Hosting",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
  {
    img: "/s5.png",
    title: "Wordpress Hosting",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
  {
    img: "/s6.png",
    title: "Domain Name",
    discreption:
      "Generators on the Internet tend to repeat predefined chunks as necessary",
    button: "Read More",
  },
];

const Services = () => {
  return (
    <div id="services" className="py-12">
      <div className="min-h-screen bg-white w-full flex justify-center items-center flex-col mb-7 px-4">
        <h2 className="font-bold uppercase text-3xl mt-2 py-8 w-full text-center mx-auto max-w-[1300px]">
          Our Services
        </h2>

        <div className="flex justify-center w-full items-center flex-wrap gap-5 mx-auto max-w-[1300px]">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-gray-100 w-full sm:w-[45%] lg:w-[30%] py-7 px-6 flex justify-center items-center flex-col gap-4 shadow-md shadow-slate-400 group transition duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="bg-blue-600 group-hover:bg-[#FF4646] rounded-full w-[80px] h-[80px] flex justify-center items-center transition duration-300 ease-in-out">
                  <img
                    src={service.img}
                    alt=""
                    className="w-[50px] h-[50px] mx-auto bg-cover object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="tracking-tighter text-[18px] text-center">
                  {service.discreption}
                </p>
                <div className="flex justify-center items-center flex-row tracking-tighter group-hover:text-[#FF4646] text-blue-600 transition duration-300 ease-in-out">
                  <h5 className="text-[20px] text-nowrap">{service.button}</h5>
                  <MdOutlineArrowRightAlt className="text-[20px] mt-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
