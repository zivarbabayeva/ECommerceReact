import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return( <div className="flex gap-4">
        <NavLink
            to="/"
            style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : undefined,
            })}
        >
            Home
        </NavLink>
        <NavLink
            to="/product"
            style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : undefined,
            })}
        >
            Products
        </NavLink>
    </div>
    );
}