"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "../Siderbar_admin/page";
import Image from "next/image";
import { MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Makanan",
    price: "",
    stock: "Aktif",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/dogfood.jpg",
      name: "Premium Dog Food",
      category: "Makanan",
      price: 299000,
      stock: "Aktif",
    },
    {
      id: 2,
      image: "/catcarrier.jpg",
      name: "Kandang Kucing Pink Small",
      category: "Aksesoris",
      price: 299000,
      stock: "Aktif",
    },
    {
      id: 3,
      image: "/premium.jpg",
      name: "Premium Food",
      category: "Makanan",
      price: 299000,
      stock: "Aktif",
    },
  ]);

  const categories = ["Semua", "Makanan", "Aksesoris", "Perawatan", "Mainan"];

  // Format harga ke format Rupiah
  const formatRupiah = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (showEditModal) {
      setSelectedProduct({
        ...selectedProduct,
        [name]: name === "price" ? parseFloat(value) || "" : value,
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: name === "price" ? parseFloat(value) || "" : value,
      });
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (showEditModal) {
        setSelectedProduct({
          ...selectedProduct,
          image: file,
        });
      } else {
        setNewProduct({
          ...newProduct,
          image: file,
        });
      }

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit for add
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new product with ID
    const newProductWithId = {
      ...newProduct,
      id: products.length + 1,
      image: previewImage || "/placeholder.jpg", // Use preview or placeholder
    };

    // Add to products array
    setProducts([...products, newProductWithId]);

    // Reset form and close modal
    setNewProduct({
      name: "",
      category: "Makanan",
      price: "",
      stock: "Aktif",
      image: null,
    });
    setPreviewImage(null);
    setShowAddModal(false);
  };

  // Handle edit product
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setPreviewImage(product.image);
    setShowEditModal(true);
  };

  // Handle update product
  const handleUpdateProduct = (e) => {
    e.preventDefault();

    // Update product in array
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product
    );

    setProducts(updatedProducts);
    setShowEditModal(false);
    setSelectedProduct(null);
    setPreviewImage(null);
  };

  // Handle delete click
  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  // Handle confirm delete
  const handleConfirmDelete = () => {
    const updatedProducts = products.filter(
      (product) => product.id !== selectedProduct.id
    );
    setProducts(updatedProducts);
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Produk</h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setShowAddModal(true)}
          >
            <MdAdd className="text-xl" />
            Tambah Produk
          </motion.button>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-black">Kategori</h2>
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Gambar
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Nama Produk
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Kategori
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Harga
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Stok
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products
                .filter(
                  (product) =>
                    selectedCategory === "Semua" ||
                    product.category === selectedCategory
                )
                .map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">
                      <div className="h-16 w-16 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatRupiah(product.price)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-orange-100 text-orange-600 rounded-lg"
                          onClick={() => handleEditClick(product)}
                        >
                          <MdEdit />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-red-100 text-red-600 rounded-lg"
                          onClick={() => handleDeleteClick(product)}
                        >
                          <MdDelete />
                        </motion.button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Modal - Transparan */}
      {showAddModal && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowAddModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-90 rounded-lg p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Tambah Produk Baru
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            {/* Form content */}
            <form onSubmit={handleSubmit}>
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gambar Produk
                </label>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
                    {previewImage ? (
                      <div className="w-full h-full relative">
                        <Image
                          src={previewImage}
                          alt="Preview"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <MdAdd className="mx-auto text-3xl text-gray-400" />
                        <p className="text-xs text-gray-500">Upload Gambar</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Produk
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories
                    .filter((cat) => cat !== "Semua")
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status Stok
                </label>
                <select
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Habis">Habis</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Simpan Produk
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Edit Product Modal - Transparan */}
      {showEditModal && selectedProduct && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowEditModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-90 rounded-lg p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Edit Produk</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>

            <form onSubmit={handleUpdateProduct}>
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gambar Produk
                </label>
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
                    {previewImage ? (
                      <div className="w-full h-full relative">
                        <Image
                          src={previewImage}
                          alt="Preview"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <MdAdd className="mx-auto text-3xl text-gray-400" />
                        <p className="text-xs text-gray-500">Upload Gambar</p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Produk
                </label>
                <input
                  type="text"
                  name="name"
                  value={selectedProduct.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori
                </label>
                <select
                  name="category"
                  value={selectedProduct.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {categories
                    .filter((cat) => cat !== "Semua")
                    .map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                </select>
              </div>

              {/* Price */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga (Rp)
                </label>
                <input
                  type="number"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status Stok
                </label>
                <select
                  name="stock"
                  value={selectedProduct.stock}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Habis">Habis</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Perbarui Produk
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Delete Confirmation Modal - Transparan */}
      {showDeleteModal && selectedProduct && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowDeleteModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-90 rounded-lg p-6 w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Konfirmasi Hapus
            </h2>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus produk "{selectedProduct.name}"?
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                onClick={() => setShowDeleteModal(false)}
              >
                Batal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                onClick={handleConfirmDelete}
              >
                Hapus
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
