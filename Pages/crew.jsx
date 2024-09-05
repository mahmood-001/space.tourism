import Slider from "react-slick";
import Navbar from "../component/Navbar.Jsx";
import flightEngrImg from "../src/assets/image-anousheh-ansari.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Crew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="crew-page">
      <Navbar />
      <div className="crew-con">
        <span>02</span> <h2>MEET YOUR CREW</h2>
      </div>

      <Slider {...settings}>
        <div className="slide-content">
          <div className="text-container">
            <h3>FLIGHT ENGINEER</h3>
            <h1>ANOUSEH ANSARI</h1>
            <p>
              Anousheh Ansari is an Iranian American engineer and co-founder of
              Prodea Systems. Ansari was the fourth self-funded space tourist,
              the first self-funded woman to fly to the ISS, and the first
              Iranian in space.
            </p>
          </div>
          <div className="image-container">
            <img src={flightEngrImg} />
          </div>
        </div>
        <div>
          <h1>2nd slide</h1>
        </div>
        <div>
          <h1>3rd Slide</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Crew;
