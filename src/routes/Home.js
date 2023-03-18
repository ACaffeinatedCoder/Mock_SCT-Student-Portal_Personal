import { BrowserRouter, NavLink, Link } from "react-router-dom";

export default function Home() {
    return(
            <header>
                <nav>
                <h1>Student Portal</h1>
                <Link to="home">Home</Link>
                <Link to ="profile_page">Profile</Link>
                </nav>
            </header>
    )
}