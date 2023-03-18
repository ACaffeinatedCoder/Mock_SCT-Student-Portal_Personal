// import logo from './logo.svg';
import { useEffect } from "react";
import Navbar from "./NavBar";
import ProfilePage from "./pages/ProfilePage";
import Account from "./pages/AccountPage"
import Grades from "./pages/GradesPage"
import Registration from "./pages/RegistrationPage";
import Home from "./pages/HomePage";
import {Route, Routes} from "react-router-dom"

function App() {
  // set site title
  useEffect(() => {
    document.title = "Student Portal Replica";  
  }, []);

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Profile-page" element={<ProfilePage/>}/>
          <Route path="/Grades" element={<Grades/>}/>
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Account" element={<Account/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
