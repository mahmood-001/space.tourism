import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <svg
        className="logo"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 2">
          <circle id="Oval" cx="24" cy="24" r="24" fill="white" />
          <path
            id="Path"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
            fill="#0B0D17"
          />
        </g>
      </svg>
      <div className="sub-nav">
        <div className="hr-con">
          <div className="hr"></div>
        </div>

        <div className="sub-pages">
          <Link to="/" className="page">
            <span>00</span> <div className="li">HOME</div>
          </Link>
          <Link to="/destination" className="page">
            <span>01</span>
            <div className="li">DESTINATION</div>
          </Link>
          <Link to="/crew" className="page">
            <span>02</span> <div className="li">CREW</div>
          </Link>
          <Link className="page">
            <span>03</span>
            <div className="li">TECHNOLOGY</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
