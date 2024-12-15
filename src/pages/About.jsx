import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function About() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let data = await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res.products);
        console.log(data);

        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, []);
    return <> (
        <div>
            <div className="grid grid-cols-6 gap-5  place-content-center ">
                {products.length > 0 &&
                    products.map((element) => {
                        return <>
                            <NavLink to={`${element.id}`} className="border-[1px] border-yellow-300 rounded-lg p-2  flex flex-col items-center ">
                                <img src={element.images[0]} className="rounded-lg w-50 h-40" alt="" />
                                <h1 className="items-center text-center text-sky-700" >{element.title}</h1>
                                <p className="items-center text-center text-sky-500">{element.description.slice(0, 20)}...</p>
                                <div className=" place-content-center text-sm ">
                                    <p>Rating:{element.rating}</p>
                                    <p>Price:{element.price}$</p>
                                    <p>Stock:{element.stock}</p>
                                </div>
                            </NavLink>
                        </>
                    })}
            </div >
        </div >
        );
    </>
}
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Link, useLocation } from "react-router-dom";

// const About = () => {
//   const location = useLocation();
//   const [ setPrevLocation] = useState("");
//   useEffect(() => {
//     setPrevLocation(location.state.data);
//   }, [location]);
//   return (
//     <div className="max-w-container mx-auto px-4">
//       {/* <Breadcrumbs title="About" prevLocation={prevLocation} /> */}
//       <div className="pb-10">
//         <h1 className="max-w-[600px] text-base text-lightText mb-2">
//           <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
//           is one of the world's leading ecommerce brands and is internationally
//           recognized for celebrating the essence of classic Worldwide cool
//           looking style.
//         </h1>
//         <Link to="/shop">
//           <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
//             Continue Shopping
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default About;
