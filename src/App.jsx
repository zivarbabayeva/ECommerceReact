
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import RootLayout from "./assets/components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";
import LanguageSelector from "./assets/components/LanguageSelector.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import FooterBottom from "./assets/components/Footer/FooterBottom.jsx";
import { createStore } from 'redux';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authAction } from "./store/authSlice.js";
import Cookies from "universal-cookie";
import Counter from "./pages/Counter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "product", element: <About /> },
      { path: "product/:id", element: <ProductDetail /> },

    ]
  },
])

function App() {
  const counter = useSelector(state => state.counter.counter? state.counter.counter : 0)
  const isLogged = useSelector(state => state.auth.isLogged)
  const refresh = useSelector(state => state.auth.refresh)
  const access = useSelector(state => state.auth.access)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const cookies = new Cookies();
  const login = async () => {
    const response = await fetch("https://test.mybrands.az/api/v1/auth/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      },
      body: JSON.stringify({
        "email": email,
        "password": password,
      })
      ,
    }).then(res => res.json())
    let date = new Date()
    date.setFullYear(2025)
    if (response.access) {
      console.log("dispatch");
      cookies.set("JWT_Token", response.access, { expires: date });
      dispatch(
        authAction.login({ access: response.access, refresh: response.refresh })
      );
    }
  };

  const logout = () => {
    let data = cookies.get("JWT_Token")

    console.log(data);
    // console.log(refresh);
    // console.log(access);
    dispatch(authAction.logout());
  };
  function handleChangeEmail(event) {
    setEmail(event.target.value)
  }
  function handleChangePassword(event) {
    setPassword(event.target.value)
  }
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <LanguageSelector />
      <Footer />
      <FooterBottom />
      <div className="flex flex-col justify-center items-center mb-11">
        <input className="border-2" type="text" name="" placeholder="email" value={email} onChange={handleChangeEmail} id="" />
        <input className="border-2" type="password" name="" placeholder="Password" value={password} onChange={handleChangePassword} id="" />
        <button className="border-2 rounded-sm" onClick={isLogged ? logout : login}>{isLogged ? "Logout" : "Login"}</button>
      </div>
      {access}
      {refresh}
      <Counter />
    </>

  );

}

export default App;
