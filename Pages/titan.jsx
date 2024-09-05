import titanImg from "../src/assets/image-titan.png";

function Titan() {
  return (
    <div className="destination-sub-page">
      <div>
        <img src={titanImg} alt="" />
      </div>

      <div>
        <h1 className="location">TITAN</h1>
        <h3 className="location-description">
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </h3>

        <div className="hr"></div>

        <div className="location-speed">
          <div className="location-distance">
            <h4>Avg. distance</h4>
            <h1>1.6 bil. km</h1>
          </div>

          <div className="location-time">
            <h4>Est. travel time</h4>
            <h1> 7 years</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titan;
