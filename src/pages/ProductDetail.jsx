import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {

    const params = useParams()
    const [product, setProduct] = useState()

    async function getProducts() {
        let data = await fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
        console.log(data);
        setProduct(data);
    }
    useEffect(() => {
        getProducts();
    }, []);

    return <div>
        <h1>Product</h1>
        {
            product &&
            <div className="border-[1px] border-yellow-300 rounded-lg p-2 flex flex-col items-center w-full text-cyan-950">
                <img src={product.images[0]} className="rounded-lg w-80 h-80" alt="" />
                <h1 className="items-center text-2xl">{product.title}</h1>
                <p className="items-center text-center text-sky-900 p-3">{product.description}...</p>
                <div className="flex justify-center text-sm w-1/2 gap-3 text-amber-600">
                    <p>Rating:{product.rating}</p>
                    <p>Price:{product.price}$</p>
                    <p>Stock:{product.stock}</p>
                </div>
            </div>
        }
    </div>
}