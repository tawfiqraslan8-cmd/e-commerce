import useThemeStore from "../store/useThemeStore";

export default function ProductCard({ product }) {

  const { theme } = useThemeStore();

  return (
    <div
      className={`
        rounded-lg shadow cursor-pointer overflow-hidden
        transition
        ${
          theme === "dark"
            ? "bg-[#343a40] text-white"
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
          className={
            theme === "dark"
              ? "text-gray-300 mt-2"
              : "text-gray-600 mt-2"
          }
        >
          ${product.price}
        </p>

      </div>

    </div>
  );
}