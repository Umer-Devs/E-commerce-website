import { useState } from 'react';

const Owner = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    imageUrl: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);

  // Validate product fields
  const isProductValid = (product) => {
    return product.name && product.price && product.description && product.category && product.imageUrl;
  };

  // Add new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!isProductValid(newProduct)) {
      alert('Please fill out all fields');
      return;
    }
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setNewProduct({ name: '', price: '', description: '', category: '', imageUrl: '' });
    alert('Product added successfully');
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    alert('Product deleted successfully');
  };

  // Update product
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if (!isProductValid(editingProduct)) {
      alert('Please fill out all fields');
      return;
    }
    setProducts(products.map(product =>
      product.id === editingProduct.id ? editingProduct : product
    ));
    setEditingProduct(null);
    alert('Product updated successfully');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product Management</h1>

      {/* Add/Edit Product Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="border p-2 rounded"
              value={editingProduct ? editingProduct.name : newProduct.name}
              onChange={(e) => editingProduct
                ? setEditingProduct({ ...editingProduct, name: e.target.value })
                : setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="border p-2 rounded"
              value={editingProduct ? editingProduct.price : newProduct.price}
              onChange={(e) => editingProduct
                ? setEditingProduct({ ...editingProduct, price: e.target.value })
                : setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-2 rounded"
              value={editingProduct ? editingProduct.description : newProduct.description}
              onChange={(e) => editingProduct
                ? setEditingProduct({ ...editingProduct, description: e.target.value })
                : setNewProduct({ ...newProduct, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded"
              value={editingProduct ? editingProduct.category : newProduct.category}
              onChange={(e) => editingProduct
                ? setEditingProduct({ ...editingProduct, category: e.target.value })
                : setNewProduct({ ...newProduct, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded"
              value={editingProduct ? editingProduct.imageUrl : newProduct.imageUrl}
              onChange={(e) => editingProduct
                ? setEditingProduct({ ...editingProduct, imageUrl: e.target.value })
                : setNewProduct({ ...newProduct, imageUrl: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
          {editingProduct && (
            <button
              type="button"
              className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setEditingProduct(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name || 'Product Image'}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-sm text-gray-400 mb-4">Category: {product.category}</p>
            <div className="flex justify-between">
              <button
                onClick={() => setEditingProduct(product)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Owner;
