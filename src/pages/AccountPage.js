// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "../NavBar";

function Account() {
  return (
    <div>
      <Navbar/>
      <div className="main-background">
        <div className="accountPageLayout">
          <p>Account Details</p>
        </div>
      </div>
    </div>
  );
}

export default Account;
