import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useThemeStore from "../store/useThemeStore";

export default function CardDetails() {
  const { id } = useParams();
  const { theme } = useThemeStore();

  const [product, setProduct] = useState(null);


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);


  if (!product) {
    return <h1>Loading...</h1>;
  }


  return (
    <div
      className={`
        max-w-4xl mx-auto p-6 rounded-xl
        ${
          theme === "dark"
            ? "bg-[#212529] text-white"
            : "bg-white text-black"
        }
      `}
    >

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full max-h-96 object-cover rounded-lg"
      />


      <h1 className="text-3xl font-bold mt-4">
        {product.title}
      </h1>


      <p
        className={`
          mt-3
          ${
            theme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }
        `}
      >
        {product.description}
      </p>


      <p className="text-2xl font-bold mt-4">
        ${product.price}
      </p>


      <p className="mt-2">
        Category: {product.category}
      </p>


      <p>
        Stock: {product.stock}
      </p>


    </div>
  );
}