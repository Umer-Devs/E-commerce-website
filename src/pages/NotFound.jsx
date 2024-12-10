const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600">Oops! Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-500">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline text-lg">
        Go back to Home
      </a>
    </div>
  )
}

export default NotFound
