// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "./NavBar";
import ProfilePage from "./pages/ProfilePage";
import Account from "./pages/AccountPage"
import Grades from "./pages/GradesPage"
import Registration from "./pages/RegistrationPage";
import Home from "./pages/HomePage";
import {Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Main from "./pages/Main";

function App() {
  // set site title
  useEffect(() => {
    document.title = "Student Portal Replica";  
  }, []);
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
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Main" element={<Main/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Grades" element={<Grades/>}/>
    <Route path="/Profile-page" element={<ProfilePage/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Account" element={<Account/>}/>
  </Routes>
)
}

export default App;
