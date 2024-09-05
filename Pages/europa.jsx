import europaImg from "../src/assets/image-europa.png";

function Europa() {
  return (
    <div className="destination-sub-page">
      <div>
        <img src={europaImg} alt="" />
      </div>

      <div>
        <h1 className="location">EUROPA</h1>
        <h3 className="location-description">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </h3>

        <div className="hr"></div>

        <div className="location-speed">
          <div className="location-distance">
            <h4>Avg. distance</h4>
            <h1>628 mil. km</h1>
          </div>

          <div className="location-time">
            <h4>Est. travel time</h4>
            <h1>3 years</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Europa;
