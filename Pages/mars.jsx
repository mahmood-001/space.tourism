import marsImg from "../src/assets/image-mars.webp";

function Mars() {
  return (
    
      <div className="destination-sub-page">
        <div>
          <img src={marsImg} alt="" />
        </div>

        <div>
          <h1 className="location">MARS</h1>
          <h3 className="location-description">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest! .
          </h3>

          <div className="hr"></div>

          <div className="location-speed">
            <div className="location-distance">
              <h4>Avg. distance</h4>
              <h1>225 mil. km</h1>
            </div>

            <div className="location-time">
              <h4>Est. travel time</h4>
              <h1> 9 months</h1>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Mars;
