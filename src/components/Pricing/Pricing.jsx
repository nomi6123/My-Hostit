const services = [
  {
    img: "$ 49",
    title: "STARTUP",
    title1: "2GB RAM",
    title2: "20GB SSD Cloud Storage",
    title3: "Weekly Backups",
    title4: "DDoS Protection",
    title5: "Full Root Access",
    title6: "24/7/365 Tech Support",
    button: "See Detail",
  },
  {
    img: "$ 99",
    title: "STANDARD",
    title1: "4GB RAM",
    title2: "50GB SSD Cloud Storage",
    title3: "Weekly Backups",
    title4: "DDoS Protection",
    title5: "Full Root Access",
    title6: "24/7/365 Tech Support",
    button: "See Detail",
  },
  {
    img: "$ 199",
    title: "BUSINESS",
    title1: "8GB RAM",
    title2: "100GB SSD Cloud Storage",
    title3: "Weekly Backups",
    title4: "DDoS Protection",
    title5: "Full Root Access",
    title6: "24/7/365 Tech Support",
    button: "See Detail",
  },
];

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="min-h-screen bg-white  w-full flex justify-center items-center flex-col mb-7 px-4">
        <h2 className="font-bold uppercase text-3xl py-8 w-full text-center mx-auto max-w-[1300px]">
          Our Pricing
        </h2>

        <div className="flex justify-center w-full items-center flex-wrap gap-10 mx-auto max-w-[1300px]">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col items-center gap-4">
              <div
                className="bg-gray-100 group-hover:bg-[#03A7D3]  
                rounded-[25px] max-md:py-4 max-md:px-8 py-8 px-14 flex flex-col items-center gap-2 
                shadow-md shadow-slate-400 transition duration-300 
                ease-in-out transform hover:scale-105"
              >
                <h1 className="text-5xl tracking-tighter font-bold mb-2 group-hover:text-white">
                  {service.img}
                </h1>
                <h2 className="text-[18px] text-[#03A7D3] font-bold group-hover:text-white">
                  {service.title}
                </h2>

                <div className="text-[18px] tracking-tighter space-y-2 group-hover:text-white flex justify-center items-center flex-col">
                  <h2>{service.title1}</h2>
                  <h2>{service.title2}</h2>
                  <h2>{service.title3}</h2>
                  <h2>{service.title4}</h2>
                  <h2>{service.title5}</h2>
                  <h2>{service.title6}</h2>
                </div>
              </div>

              <button className="px-10 py-2 mt-5
               group-hover:scale-125 text-sm md:text-base
                bg-[#FF4646] text-white font-bold rounded-[8px] 
                transition duration-500 border border-[#03A7D3] transform
                 group-hover:bg-[#03A7D3] group-hover:text-white">
                {service.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
