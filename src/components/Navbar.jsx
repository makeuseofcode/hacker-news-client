import { NavLink } from "react-router-dom"
export default function Navbar() {
    return <nav>
        <NavLink to="/news">Home</NavLink>
        <NavLink to="/best">Best</NavLink>
        <NavLink to="/show">Show</NavLink>
        <NavLink to="/ask">Ask</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
    </nav>
}