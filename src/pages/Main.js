// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "../NavBar";
import ProfilePage from "./ProfilePage";
import Account from "./AccountPage";
import Grades from "./GradesPage";
import Registration from "./RegistrationPage";
import Home from "./HomePage";
import { Route, Routes } from "react-router-dom";

function Main() {
  // set site title
  useEffect(() => {
    document.title = "Student Portal Replica";  
  }, []);

  let component
  switch(window.location.pathname){
    case "/Home":
        component = <Home/>
        break
    case "/Profile-page":
        component = <ProfilePage/>
        break
    case "/Grades":
        component = <Grades/>
        break
    case "/Registration":
        component = <Registration/>
        break
    case "/Account":
        component = <Account/>
        break
    default:
        component = <Home/>
        break
  }

  return (
    <>
        <div>
            {component}
        </div>
    </>
  )
}

export default Main;
