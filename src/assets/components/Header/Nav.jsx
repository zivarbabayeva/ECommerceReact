import { NavLink } from "react-router-dom";
const NavLinks = () => {
    return (<div className=" flex pr-6 gap-8 justify-between font-bold text-zinc-400">
        <>
            <NavLink
                to="/men"
                className={({ isActive }) =>
                    isActive
                        ? "text-zinc-400"
                        : "hover:underline active:text-zinc-950"
                }
            >
                Men |
            </NavLink>
            <NavLink
                to="/women"
                className={({ isActive }) =>
                    isActive
                        ? "text-zinc-400"
                        : "hover:underline active:text-zinc-950"
                }
            >
                Women |
            </NavLink>
            <NavLink
            to="/kids"
            className={({ isActive }) =>
                isActive
                    ? "text-zinc-400"
                    : "hover:underline active:text-zinc-950"
            }
        >
       Kids 
        </NavLink>
           
            <NavLink to="/search"></NavLink>
        </>
    </div>
    );
};
const Nav = () => {
    return (
        <>
            <nav className=" flex py-1 items-center border-b-gray-400  hover:border-b-grey hover: hover:text-grey duration-300 cursor-pointer">
                <div className="">
                    <NavLinks />

                </div>
            </nav>
        </>
    )
}
export default Nav;