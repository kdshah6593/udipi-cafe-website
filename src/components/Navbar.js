import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1>This will become the navgiation bar</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/menu">Menu</Link> |{" "}
                <Link to="/catering">Catering</Link> |{" "}
                <Link to="/testimonials">Testimonials</Link>
            </nav>
        </div>
    )
}

export default Navbar
