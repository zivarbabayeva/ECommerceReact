import Header from "./Header";
import Navbar from "./Header/Navbar";
import { Outlet } from "react-router-dom";
import NavbarBottom from "./Header/NavbarBottom";

export default function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <NavbarBottom></NavbarBottom>
         <Outlet></Outlet>

    </div>
  )
}
