// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "../NavBar";

function Home() {
  
  return (
    <div>
      <Navbar/>
      <div className="main-background">
        <div className="homePageLayout">
          <div className="homePageLayout1">
            <p>Immediate Details</p>
          </div>
          <div className="homePageLayout2">
            <p>Announcements</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Home;
