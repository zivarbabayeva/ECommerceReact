import {  NavLink } from "react-router-dom"

export default function Navbar() {
    return (<div className="flex pl-11 p-3 gap-8 text-zinc-800 bg-zinc-100">
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
                    ? "text-black-50"
                    : "hover:underline"
            }
        >
        About us
        </NavLink>
        <NavLink
            to="/musteri"
            className={({ isActive }) =>
                isActive
                    ? "text-black-50"
                    : "hover:underline"
            }
        >
            Helps&Faq
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
          News and Blog
        </NavLink>
    </div>
   
    );
}