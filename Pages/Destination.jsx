import DestinationNav from "../component/DestinationNav";
import Navbar from "../component/Navbar.Jsx";
import { Outlet } from "react-router-dom";
function Destination() {
  return (
    <div className="destination-page">
      <Navbar />
      <div className="destination-con">
        <span>01</span>
        <h1>pick your Destination</h1>
      </div>
      <div className="destination-page-links">
        <DestinationNav />
      </div>

      <Outlet />
    </div>
  );
}

export default Destination;
