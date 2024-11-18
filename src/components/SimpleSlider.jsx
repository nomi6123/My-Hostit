import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Our Gallery</h2>
      <Slider {...settings}>
        <div className="p-8 bg-blue-50 rounded-lg text-center text-blue-700">
          <h3 className="text-lg font-bold">Slide 1</h3>
          <p>This is the first slide.</p>
        </div>
        <div className="p-8 bg-green-50 rounded-lg text-center text-green-700">
          <h3 className="text-lg font-bold">Slide 2</h3>
          <p>This is the second slide.</p>
        </div>
        <div className="p-8 bg-yellow-50 rounded-lg text-center text-yellow-700">
          <h3 className="text-lg font-bold">Slide 3</h3>
          <p>This is the third slide.</p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
