import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Cart = () => {

  const [products, setProducts] = useState([]); // All products fetched from the API
  const [cartItems, setCartItems] = useState([]); // Items in the cart
  const { id } = useParams(); // Product ID from the route

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // Fetch all products from the API
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(res.data);

        // Find and add the specific product to the cart
        const selectedProduct = res.data.find((product) => product.id === Number(id));
        if (selectedProduct) {
          setCartItems([{ ...selectedProduct, quantity: 1 }]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchApi();
  }, [id]);

  // Update the quantity of a cart item
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((cartItems) =>
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, newQuantity) } // Ensure quantity doesn't go below 0
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (itemId) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== itemId));
  };

  // Calculate the total price of the cart items
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
          <Link
            to="/products"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border rounded-lg p-4 shadow-sm"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-grow ml-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => console.log("Proceeding to checkout...")}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
