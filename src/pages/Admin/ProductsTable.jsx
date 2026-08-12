import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/useThemeStore";

export default function ProductsTable() {
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    category: "",
    price: "",
    stock: "",
  });


  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [page]);



  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
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



  function handleAddNew() {

    setFormData({
      id: null,
      title: "",
      category: "",
      price: "",
      stock: "",
    });

    setShowModal(true);
  }



  function handleEdit(e, product) {

    e.stopPropagation();

    setFormData({
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });

    setShowModal(true);
  }



  async function handleDelete(e, id) {

    e.stopPropagation();

    try {

      await fetch(
        `https://dummyjson.com/products/${id}`,
        {
          method: "DELETE",
        }
      );


      setProducts(
        products.filter(
          (product) => product.id !== id
        )
      );


    } catch (error) {

      console.log(error);

    }

  }




  async function handleSubmit(e) {

    e.preventDefault();


    try {


      if (formData.id) {

        const res = await fetch(
          `https://dummyjson.com/products/${formData.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          }
        );


        const updated = await res.json();


        setProducts(
          products.map((product) =>
            product.id === formData.id
              ? updated
              : product
          )
        );


      } else {


        const res = await fetch(
          "https://dummyjson.com/products/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          }
        );


        const newProduct = await res.json();


        setProducts([
          newProduct,
          ...products
        ]);


      }


      setShowModal(false);


    } catch (error) {

      console.log(error);

    }

  }

  return (
    <div
      className={`
        overflow-x-auto
        ${theme === "dark"
          ? "text-white"
          : "text-black"
        }
      `}
    >

      <div className="flex justify-between items-center mb-5">

        <div className="flex items-center gap-3">

          <h2 className="text-2xl font-bold">
            Products
          </h2>


          <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
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

        </div>



        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64"
          />


          <button
            onClick={handleAddNew}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Product
          </button>


        </div>

      </div>



      <table className="w-full border border-gray-300">


        <thead className="bg-gray-200">

          <tr>

            <th className="border p-3 text-center">
              Name
            </th>

            <th className="border p-3 text-center">
              Category
            </th>

            <th className="border p-3 text-center">
              Price
            </th>

            <th className="border p-3 text-center">
              Stock
            </th>

            <th className="border p-3 text-center">
              Actions
            </th>

          </tr>

        </thead>



        <tbody>

          {filteredProducts.map((product) => (

            <tr
              key={product.id}
              onClick={() => navigate(`/admin/products/${product.id}`)}
              className="cursor-pointer hover:bg-gray-100"
            >


              <td className="border p-3 text-center">
                {product.title}
              </td>


              <td className="border p-3 text-center">
                {product.category}
              </td>


              <td className="border p-3 text-center">
                ${product.price}
              </td>


              <td className="border p-3 text-center">
                {product.stock}
              </td>


              <td className="border p-3">

                <div className="flex justify-center gap-2">


                  <button
                    onClick={(e) => handleEdit(e, product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>



                  <button
                    onClick={(e) => handleDelete(e, product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>


                </div>

              </td>


            </tr>

          ))}

        </tbody>


      </table>



      <div className="flex justify-center gap-2 mt-6">


        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>



        {[1, 2, 3].map((num) => (

          <button
            key={num}
            onClick={() => setPage(num)}
            className="px-4 py-2 border rounded"
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





      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">


          <div className="bg-white text-black p-6 rounded-lg w-96">


            <h2 className="text-2xl font-bold h-10 flex items-center">
              Products
            </h2>



            <form onSubmit={handleSubmit}>


              <input
                className="border p-2 w-full mb-3"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({
                  ...formData,
                  title: e.target.value
                })}
              />


              <input
                className="border p-2 w-full mb-3"
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({
                  ...formData,
                  category: e.target.value
                })}
              />



              <input
                type="number"
                className="border p-2 w-full mb-3"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({
                  ...formData,
                  price: e.target.value
                })}
              />



              <input
                type="number"
                className="border p-2 w-full mb-3"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) => setFormData({
                  ...formData,
                  stock: e.target.value
                })}
              />



              <div className="flex justify-end gap-2">


                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>



                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>


              </div>



            </form>


          </div>


        </div>

      )}


    </div>
  );
}