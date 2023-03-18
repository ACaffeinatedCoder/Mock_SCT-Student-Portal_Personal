// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "../NavBar";

function Grades() {
  return (
    <div>
      <Navbar/>
      <div className="main-background">
        <div className="gradesPageLayout">
          <p>Grades</p>
        </div>
      </div>
    </div>
  );
}

export default Grades;
