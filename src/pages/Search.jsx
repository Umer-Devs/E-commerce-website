import { useState, useEffect } from 'react'; // Import useState
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState(''); // State for search query
  const [products, setProducts] = useState([]); // Added state for products
  const [loading, setLoading] = useState(true); // Added loading state

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', query);
  };

  const fetchApi = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/products");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="flex justify-center mb-5">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search..." 
          className="w-96 p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-bg-gradient-to-r from-purple-600 to-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        />
        <button 
          onClick={handleSearch} // Now handleSearch is defined
          className="ml-3 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search
        </button>
      </div>

      {loading ? ( // Conditional rendering for loader
        <div className="loader">Loading...</div> // Replace with your loader component
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Updated layout for better display */}
          {products.slice(3,27)
            .filter(product => product.title.toLowerCase().includes(query.toLowerCase())) // Filter products based on the search query
            .map((product, index) => (
              <div key={product.id || index} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                <div className="relative">
                  {/* Product Image */}
                  <img
                    className="w-full h-48 object-cover"
                    src={product.images && product.images.length > 0 ? product.images[0] : 'default-image-url.jpg'}
                    alt={product.title}
                  />
                  {/* Badge */}
                  {product.isNew && (
                    <span className="absolute top-2 right-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      New
                    </span>
                  )}
                </div>
                {/* Card Content */}
                <div className="p-4">
                  {/* Product Title */}
                  <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-rose-500 transition-colors duration-300">
                    {typeof product.title === 'string' ? product.title : 'Unknown Title'}
                  </h3>
                  {/* Product Description */}
                  <p className="text-gray-600 text-base">
                    {typeof product.description === 'string' ? product.description.slice(0, 26) : 'No description available'}
                  </p>
                </div>
                {/* Card Footer */}
                <div className="px-4 pt-2 pb-2 flex items-center justify-between">
                  {/* Category Tag */}
                  <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 text-sm font-semibold rounded-full">
                    {typeof product.category === 'string' ? product.category : 'Unknown Category'}
                  </span>
                  {/* Price */}
                  <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 text-sm font-semibold rounded-full">
                    {typeof product.price === 'number' ? `$${product.price}` : 'Price not available'}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-rose-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-rose-600 transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Search;
