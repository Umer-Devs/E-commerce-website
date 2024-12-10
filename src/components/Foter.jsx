const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 mt-4 text-white py-12">
      {/* Main Footer Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
            About Us
          </h3>
          <p className="text-gray-100">
            We bring the latest fashion trends to your doorstep. Shop with us
            for premium quality, comfort, and style in every stitch.
          </p>
        </div>

        {/* Quick Links */}
        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="text-gray-100 hover:text-pink-300 transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-100 hover:text-pink-300 transition duration-300">
                Shop
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-100 hover:text-pink-300 transition duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-100 hover:text-pink-300 transition duration-300">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-pink-400 pb-2 inline-block">
            Subscribe to Our Newsletter
          </h3>
          <form>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 rounded-lg text-white font-semibold hover:bg-pink-600 transform hover:scale-105 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-6"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-200">
          © {new Date().getFullYear()} YourBrand. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-200 hover:text-pink-300 transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-gray-200 hover:text-pink-300 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-200 hover:text-pink-300 transition duration-300">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
