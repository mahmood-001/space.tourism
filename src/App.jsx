import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import Moon from "../Pages/moon";
import Mars from "../Pages/mars";
import Europa from "../Pages/europa";
import Titan from "../Pages/titan";
import Crew from "../Pages/crew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />}>
          <Route index element={<Moon />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/europa" element={<Europa />} />
          <Route path="/destination/titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
