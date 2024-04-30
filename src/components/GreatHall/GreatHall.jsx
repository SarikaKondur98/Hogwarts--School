import { NavLink, Link, useLocation } from "react-router-dom";
import './GreatHall.css'

export const GreatHall = () => {
    const location = useLocation();
    return (
        <nav>
            {
                location.pathname !== "/gryffindor" && (
                    <div>
                        <NavLink to='/home' className="nav">Landing Page</NavLink>
                        <NavLink to='/gryffindor'>Gryffindor</NavLink>
                    </div>
                )
            }
        </nav>
    )
}