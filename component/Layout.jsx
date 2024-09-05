import DestinationNav from "./DestinationNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <DestinationNav />
      <Outlet />
    </div>
  );
}

export default Layout