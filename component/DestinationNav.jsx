import { Link } from "react-router-dom";
function DestinationNav() {
  return (
    <div className="destination-nav">
      <Link to="/destination" className="page">
        <div className="li">MOON</div>
      </Link>
      <Link to="/destination/mars" className="page">
        <div className="li">MARS</div>
      </Link>
      <Link to="/destination/europa" className="page">
        <div className="li">EUROPA</div>
      </Link>
      <Link to="/destination/titan" className="page">
        <div className="li">TITAN</div>
      </Link>
    </div>
  );
}

export default DestinationNav;
