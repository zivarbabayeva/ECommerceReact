import Basket from "./Basket";
import Logo from "./Logo";
import Nav from "./Header/Nav";
import Sign from "./Sign";
const Header=()=>{
  return(

  <header className="flex gap-4 p-10 items-center w-full h-20 justify-around bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
  <Logo/>
  <Nav/>
  <Basket/>
  <Sign/>
  </header>
);

};
  

         
export default Header;
      
       


    