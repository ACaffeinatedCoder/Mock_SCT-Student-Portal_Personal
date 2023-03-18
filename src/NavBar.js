export default function Navbar() {
    return <nav className="nav">
        <a href="/Home" className="site-title">SCT Student Portal</a>
        <ul>
            <li>
                <a href="/Profile-page">Profile</a>
            </li>
            <li>
                <a href="/Grades">Grades</a>
            </li>
            <li>
                <a href="/Registration">Registration</a>
            </li>
            <li>
                <a href="/Account">Account</a>
            </li>
        </ul>
    </nav>
}