import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  const fetchApi = async () => {
    try {
      let res = await axios.get("https://api.escuelajs.co/api/v1/products");
   
      setProducts(res.data);
      setSaleProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div className="relative min-h-screen   bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            {/* Left Content Section */}
            <div className="flex-1 text-center md:text-left space-y-8">
              {/* Badge */}
              <div className="inline-block px-4 py-2 bg-rose-100 rounded-xl">
                <span className="text-rose-600 font-medium tracking-wide text-sm">Spring Collection 2024</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800">
                Discover Your
                <span className="block mt-2 bg-gradient-to-r from-rose-400 to-orange-400 text-transparent bg-clip-text">
                  Signature Style
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed">
                Curated collections that blend timeless elegance with contemporary trends. 
                Each piece tells a story of craftsmanship and style.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <button className="group px-8 py-4 bg-rose-500 text-white font-medium rounded-xl hover:bg-rose-600 shadow-lg shadow-rose-200 transform hover:-translate-y-0.5 transition-all duration-300">
                  Explore Collection
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
                <button className="px-8 py-4 bg-white text-slate-800 font-medium rounded-xl hover:bg-slate-50 shadow-lg shadow-slate-200 transform hover:-translate-y-0.5 transition-all duration-300">
                  View Lookbook
                </button>
              </div>
              
              {/* Features */}
              <div className="flex gap-8 justify-center md:justify-start mt-12">
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 text-transparent bg-clip-text">50k+</div>
                  <div className="text-slate-500 text-sm mt-1">Happy Customers</div>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 text-transparent bg-clip-text">300+</div>
                  <div className="text-slate-500 text-sm mt-1">New Arrivals</div>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div className="text-center md:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 text-transparent bg-clip-text">98%</div>
                  <div className="text-slate-500 text-sm mt-1">Positive Reviews</div>
                </div>
              </div>
            </div>
            
            {/* Right Image Section */}
            <div className="flex-1 relative group perspective-1000">
              <div className="relative z-10 aspect-[4/5] max-w-lg mx-auto transform-gpu transition-all duration-700 ease-out-expo hover:rotate-y-12 group-hover:translate-x-8">
                {/* Main Image Container */}
                <div className="relative h-full transform-gpu transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/03/14/10/13/girl-6093779_1280.jpg"
                    alt="Fashion Model"
                    className="rounded-3xl object-cover w-full h-full shadow-2xl transition-all duration-700"
                  />
                  
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-rose-500/10 to-orange-500/10"></div>
                  
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -right-12 top-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                      <span className="text-rose-500 text-xl">🌟</span>
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">Premium Quality</p>
                      <p className="text-slate-500 text-sm">Handcrafted with love</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-12 bottom-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 delay-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-500 text-xl">🎨</span>
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">Unique Design</p>
                      <p className="text-slate-500 text-sm">Stand out from crowd</p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-rose-200 to-orange-200 transition-all duration-700 ease-out-expo group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-6"></div>
                <div className="absolute -z-20 -bottom-4 -left-4 w-full h-full rounded-3xl bg-white shadow-xl transition-all duration-700 ease-out-expo group-hover:-translate-x-4 group-hover:-translate-y-4 group-hover:-rotate-6"></div>

                {/* Animated Circles */}
                <div className="absolute -z-30 w-40 h-40 rounded-full bg-rose-200/50 blur-2xl top-1/4 -right-20 transition-all duration-700 group-hover:scale-150"></div>
                <div className="absolute -z-30 w-40 h-40 rounded-full bg-orange-200/50 blur-2xl bottom-1/4 -left-20 transition-all duration-700 group-hover:scale-150"></div>

                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-24 h-24">
                  <div className="absolute w-full h-full border-t-4 border-l-4 border-rose-300/0 rounded-tl-3xl transition-all duration-700 group-hover:border-rose-300/50 group-hover:scale-110"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24">
                  <div className="absolute w-full h-full border-b-4 border-r-4 border-orange-300/0 rounded-br-3xl transition-all duration-700 group-hover:border-orange-300/50 group-hover:scale-110"></div>
                </div>
              </div>

              {/* Particle Effects */}
              <div className="absolute w-2 h-2 rounded-full bg-rose-400/80 top-1/4 right-0 blur-[1px] animate-float-slow"></div>
              <div className="absolute w-2 h-2 rounded-full bg-orange-400/80 bottom-1/4 left-0 blur-[1px] animate-float-slow-reverse"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Products */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Product Cards */}
          {products.slice(2,10).map((product, index) => (
            <div key={product.id || index} className="max-w-full rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <div className="relative">
                {/* Product Image */}
                <img
                  className="w-full h-60 object-cover"
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
              <div className="px-4 py-2">
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
                <Link to={`/Productdetail/${product.id}`}>
                  <button className="bg-rose-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-rose-600 transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="transform hover:scale-105 transition duration-300 text-center">
            <div className="text-4xl mb-2 text-rose-500">
              <i className="fas fa-truck"></i> {/* Fast Delivery Icon */}
            </div>
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              We ensure your products are delivered to you in the fastest time possible.
            </p>
          </div>
          <div className="transform hover:scale-105 transition duration-300 text-center">
            <div className="text-4xl mb-2 text-rose-500">
              <i className="fas fa-check-circle"></i> {/* Quality Products Icon */}
            </div>
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We only offer the highest quality products to our customers.
            </p>
          </div>
          <div className="transform hover:scale-105 transition duration-300 text-center">
            <div className="text-4xl mb-2 text-rose-500">
              <i className="fas fa-headset"></i> {/* Customer Support Icon */}
            </div>
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
              24/7 Customer Support
            </h3>
            <p className="text-gray-600">
              Our dedicated customer support team is available 24/7 to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Coming Soon!</h2>
        <p className="text-gray-600 mb-6">Stay tuned for our exciting new features and updates.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1652819804299-eea887780ca7?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your first image URL
              alt="Coming Soon 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618754246388-ef8a6be60ed6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your second image URL
              alt="Coming Soon 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1710153662499-48d981d0c605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your third image URL
              alt="Coming Soon 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Sale Products Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Sale Products!</h2>
        <p className="text-gray-600 mb-6">Don t miss out on our limited time offers!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {saleProducts.length > 0 ? (
            saleProducts.slice(12,21).map((product, index) => (
              <div key={product.id || index} className="relative group">
                <img
                  src={product.images && product.images.length > 0 ? product.images[0] : 'default-image-url.jpg'} // Ensure this is the correct property for the image
                  alt={product.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount} OFF
                </span>
                {/* Hover Overlay for View More Button */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-rose-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-rose-600 transition-colors duration-300">
                    
                      View Details
                    
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No sale products available.</p> // Fallback message
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
