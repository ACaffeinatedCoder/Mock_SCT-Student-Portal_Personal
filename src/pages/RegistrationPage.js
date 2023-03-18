// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "../NavBar";

function Registration() {
  return (
    <div>
      <Navbar/>
      <div className="main-background">
        <div className="profilePageLayout">
          <div className="sectionOfferingPageLayout">
            <p>Section Offerings</p>
          </div>
          <div className="registrationPageLayout">
            <p>Registration Area</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Registration;
