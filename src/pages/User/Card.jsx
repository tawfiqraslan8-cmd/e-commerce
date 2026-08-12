import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/useThemeStore";

export default function Card() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const { theme } = useThemeStore();

  const limit = 8;

  const navigate = useNavigate();



  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [page]);




  const filteredProducts = products
    .filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {

      if (!sortBy) return 0;


      if (typeof a[sortBy] === "string") {

        return order === "asc"
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);

      }


      return order === "asc"
        ? a[sortBy] - b[sortBy]
        : b[sortBy] - a[sortBy];

    });



  return (
    <>

      <div
        className="
          p-6
        "
      >

        <div className="flex justify-between items-center mb-5">


          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="border rounded-lg px-3 py-0.5 text-sm"
          >

            <option value="">
              Sort By
            </option>


            <option value="title">
              Name
            </option>


            <option value="price">
              Price
            </option>


            <option value="stock">
              Stock
            </option>


          </select>



          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64"
          />


        </div>




        <div
          className="
            grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
            gap-6
          "
        >


          {filteredProducts.map((product)=>(


            <div
              key={product.id}
              onClick={() => navigate(`/card/${product.id}`)}
              className={`
                rounded-lg shadow cursor-pointer overflow-hidden
                transition
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
                className="w-full h-52 object-cover"
              />


              <div className="text-center mt-3 p-3">


                <h2 className="font-bold text-lg">
                  {product.title}
                </h2>


                <p
                  className={`
                    mt-2
                    ${
                      theme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }
                  `}
                >
                  ${product.price}
                </p>


              </div>


            </div>


          ))}


        </div>

                <div className="flex justify-center items-center gap-3 mt-6">


          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>



          {[1,2,3].map((num)=>(

            <button
              key={num}
              onClick={()=>setPage(num)}
              className={`
                px-4 py-2 border rounded
                ${
                  page === num
                    ? "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "text-white border-gray-500"
                    : "text-black"
                }
              `}
            >

              {num}

            </button>

          ))}



          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border rounded"
          >
            Next
          </button>


        </div>


      </div>


    </>
  );
}