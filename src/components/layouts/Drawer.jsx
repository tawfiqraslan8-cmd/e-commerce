
import useCartStore from "../../store/useCartStore";

// const mockProducts = [
//   {
//     id: 1,
//     title: "Wireless Headphones",
//     price: 79.99,
//     quantity: 2,
//     image:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 2,
//     title: "Smart Watch",
//     price: 129.99,
//     quantity: 1,
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
//   },
//   {
//     id: 3,
//     title: "Running Shoes",
//     price: 94.99,
//     quantity: 3,
//     image:
//       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
//   },
// ];


export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    RemoveFromCart,
    IncreamentProduct,
    DecreamentProduct,
  } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  //   // Increase
  //   const increaseQuantity = (id) => {
  //     setCart((currentCart) =>
  //       currentCart.map((product) =>
  //         product.id === id
  //           ? {
  //               ...product,
  //               quantity: product.quantity + 1,
  //             }
  //           : product
  //       )
  //     );
  //   };

  //   // Decrease
  //   const decreaseQuantity = (id) => {
  //     setCart((currentCart) =>
  //       currentCart
  //         .map((product) =>
  //           product.id === id
  //             ? {
  //                 ...product,
  //                 quantity: product.quantity - 1,
  //               }
  //             : product
  //         )
  //         .filter((product) => product.quantity > 0)
  //     );
  //   };

  //   // Remove
  //   const removeProduct = (id) => {
  //     setCart((currentCart) =>
  //       currentCart.filter((product) => product.id !== id)
  //     );
  //   };

  // Subtotal
  //   const subtotal = cart.reduce(
  //     (total, product) =>
  //       total + product.price * product.quantity,
  //     0
  //   );

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/50"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Shopping Cart
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {cart.length} products
            </p>
          </div>

          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200"
          >
            ×
          </button>
        </div>

        {/* Products */}
        <div className="flex-1 overflow-y-auto p-6">
          {
            cart.length == 0 ?
              (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="text-5xl">🛒</div>

                  <h3 className="mt-4 text-lg font-semibold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Add some products to your cart.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((product) => (
                    <div
                      key={product?.id}
                      className="rounded-xl border border-gray-200 p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image */}
                        <img
  src={product?.thumbnail}
  alt={product?.title}
  className="h-24 w-24 rounded-lg object-cover"
/>

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate font-semibold text-gray-900">
                            {product?.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            ${product?.price?.toFixed(2)}
                          </p>

                          {/* Quantity */}
                          <div className="mt-3 flex items-center">
                            <button
                              onClick={() =>
                                DecreamentProduct(product?.id)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-l-lg border border-gray-300 bg-gray-50 text-lg hover:bg-gray-100"
                            >
                              −
                            </button>

                            <span className="flex h-8 min-w-10 items-center justify-center border-y border-gray-300 text-sm font-semibold">
                              {product?.quantity}
                            </span>

                            <button
                              onClick={() =>
                                IncreamentProduct(product?.id)
                              }
                              className="flex h-8 w-8 items-center justify-center rounded-r-lg border border-gray-300 bg-gray-50 text-lg hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Remove */}
                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => RemoveFromCart(product?.id)}
                          className="
    self-start
    px-3
    py-1
    rounded-md
    border
    border-[#0077b6]
    bg-white
    text-[#0077b6]
    text-sm
    font-medium
    hover:bg-[#0077b6]
    hover:text-white
    transition
  "
                        >
                          Remove
                        </button>
                      </div>

                      {/* Product Total */}
                      <div className="mt-4 flex justify-between border-t pt-3">
                        <span className="text-sm text-gray-500">
                          Total
                        </span>

                        <span className="font-bold text-gray-900">
                          $
                          {(
                            product?.price * product?.quantity
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              )}
        </div>

        {/* Footer */}
        <div className="border-t bg-white p-6">

          <div className="mb-4 flex items-center justify-between">
            <span className="font-medium text-gray-600">
              Total
            </span>

            <span className="text-xl font-bold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <button className="w-full rounded-xl bg-[#0077b6] py-3.5 font-semibold text-white transition hover:bg-gray-800">
            Checkout
          </button>

        </div>

      </div>
    </div>
  );
}