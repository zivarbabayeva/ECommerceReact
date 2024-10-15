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
            <div className="grid grid-cols-6 gap-5  place-content-center  ">
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