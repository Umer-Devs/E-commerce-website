const Logout = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-grey-500 to-[#FF6F61] flex items-center justify-center text-white">
      <div className="bg-gradient-to-b from-white to-[#FFEDD5] p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-transform hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-[#FF6F61]">Welcome Back!</h1>
        <p className="text-lg text-center mb-8  text-gray-700">
          Please log in to continue to your account.
        </p>
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-2 text-[#FF6F61]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#FFF5E1] text-gray-800 border border-[#FFB88C] focus:outline-none focus:ring-4 focus:ring-[#FF6F61] transition-shadow duration-300"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2 text-[#FF6F61]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#FFF5E1] text-gray-800 border border-[#FFB88C] focus:outline-none focus:ring-4 focus:ring-[#FF6F61] transition-shadow duration-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#FF6F61] to-[#FFB88C] text-white font-semibold rounded-lg shadow-md hover:from-[#FFB88C] hover:to-[#FF6F61] transition-colors duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password and Sign Up Links */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            <a
              href="/forgot-password"
              className="text-[#FF6F61] hover:underline"
            >
              Forgot Password?
            </a>
          </p>
          <p className="text-sm mt-4 text-gray-600">
            Dont have an account?{' '}
            <a
              href="/signup"
              className="text-[#FF6F61] font-bold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
