import {  NavLink } from "react-router-dom"

export default function NavbarBottom() {
    return (<div className="flex p-5 gap-5 font-semibold border-y">
        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive
                    ? "text-black-40"
                    : "hover:underline"
            }
        >
        NEW IN
        </NavLink>
        <NavLink
            to="/musteri"
            className={({ isActive }) =>
                isActive
                    ? "text-black-50"
                    : "hover:underline"
            }
        >
            BRANDS
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
          Digital Gift cards
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
         CLOTHING
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
          SHOES
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
         ACCESSORIES&BAGS
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
         BEAUTY
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-black-50"
                    : "hover:underline"
            }
        >
          HOME
        </NavLink>
        <div className="text-rose-500">
        <NavLink
            to="/blog"
            className={({ isActive }) =>
                isActive
                    ? " text-red-600"
                    : "hover:text-red-600"
            }
        >
          SALE
        </NavLink>
        </div>
    </div>

    );
};
