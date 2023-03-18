// import logo from './logo.svg';
import { useEffect } from "react";
import photo from '../profile.jpg'
import Navbar from "../NavBar";

function ProfilePage() {
  
  return (
    <div>
      <Navbar/>
      <div className="main-background">
        <div className="profilePageLayout">
            <div className="profilePageLayout1">
              <img src={photo} style={{height: '65%', width: '65%', paddingTop: '10px'}}/>
              <p>Student Name</p>
            </div>
            <div className="profilePageLayout2">
              <p>Student Details</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProfilePage;
