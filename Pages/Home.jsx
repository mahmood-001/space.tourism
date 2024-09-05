import Navbar from "../component/Navbar.Jsx";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-con">
        <div className="home-content">
          <h3>SO, DO YOU WANT TO TRAVEL</h3>
          <h1>SPACE</h1>
          <h4>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h4>
        </div>

        <div className="explore">
          <div className="explore-con">
            <h1>EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
