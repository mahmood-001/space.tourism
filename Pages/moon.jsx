import moonImg from "../src/assets/image-moon.png";
function Moon() {
  return (
    <div className="destination-sub-page">
      <div>
        <img src={moonImg} alt="" />
      </div>

      <div>
        <h1 className="location">MOON</h1>
        <h3 className="location-description">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </h3>

        <div className="hr"></div>

        <div className="location-speed">
          <div className="location-distance">
            <h4>Avg. distance</h4>
            <h1>384,400 km</h1>
          </div>

          <div className="location-time">
            <h4>Est. travel time</h4>
            <h1> 3 days</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moon;
