import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";

export default function ProductDetails() {
  const { id } = useParams();
  const { theme } = useThemeStore();

  const [product, setProduct] = useState(null);
  const [err, setError] = useState(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        setProduct(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    getProduct();
  }, [id]);


  if (err)
    return (
      <div className="text-red-500">
        Error loading product
      </div>
    );


  if (!product)
    return (
      <h1>
        Loading...
      </h1>
    );


  return (
    <div
      className={`
        min-h-screen p-6 rounded-xl
        ${
          theme === "dark"
            ? "bg-[#212529] text-white"
            : "bg-white text-black"
        }
      `}
    >

      <div className="flex flex-col md:flex-row gap-8">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-96 rounded-xl object-cover"
        />


        <div className="space-y-4">

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>


          <p>
            Price: ${product.price}
          </p>


          <p>
            Category: {product.category}
          </p>


          <p>
            Brand: {product.brand}
          </p>


          <p>
            Stock: {product.stock}
          </p>


          <p>
            Rating: {product.rating}
          </p>


          <p>
            {product.description}
          </p>

        </div>

      </div>

    </div>
  );
}