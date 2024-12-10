import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate hook
  const [p, setp] = useState(true);


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  const detail = products.find((product) => product.id === Number(id));
  console.log(detail);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!detail) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-6">
            <img
              src={detail.images[0]}
              alt={detail.title}
              className="w-full h-96 object-cover rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-gray-800">{detail.title}</h2>
            <p className="mt-4 text-gray-600 text-lg">
              {detail.description.slice(0, 200)}
            </p>
            {/* Rating */}
            <div className="mt-4 flex items-center">
              <span className="text-yellow-400">
                {"★".repeat(Math.floor(detail.rating?.rate || 0))}
              </span>
              <span className="ml-2 text-gray-500">
                ({detail.rating?.rate?.toFixed(1) || "No Rating"})
              </span>
            </div>
            {/* Price & Stock */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${detail.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">Free shipping</p>
              </div>
              <div className="text-lg text-green-600 font-semibold">
                {detail.available ? "In Stock" : "Out of Stock"}
              </div>
            </div>
            {/* Add to Cart Button */}
            <div className="mt-8">
              <button
                className={`w-full py-3 rounded-lg text-white ${
                  p
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!p}
                onClick={() => {
                  if (p) {
                    navigate(`/cart/${detail.id}`);
                  }
                }}
              >
                {p ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
