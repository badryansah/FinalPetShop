import React from 'react';

const products = [
  {
    id: 1,
    name: 'Susu Hewan',
    price: 'Rp150.000',
    image: 'https://via.placeholder.com/200?text=Produk+1',
  },
  {
    id: 2,
    name: 'Royal Canin',
    price: 'Rp200.000',
    image: 'https://via.placeholder.com/200?text=Produk+2',
  },
  {
    id: 3,
    name: 'Whiskas',
    price: 'Rp250.000',
    image: 'https://via.placeholder.com/200?text=Produk+3',
  },
  {
    id: 4,
    name: 'Tempat Makan Kucing',
    price: 'Rp80.000',
    image: 'https://via.placeholder.com/200?text=Produk+4',
  },
  {
    id: 5,
    name: 'Mainan Kucing Tikus',
    price: 'Rp35.000',
    image: 'https://via.placeholder.com/200?text=Produk+5',
  },
  {
    id: 6,
    name: 'Pasir Kucing Wangi',
    price: 'Rp60.000',
    image: 'https://via.placeholder.com/200?text=Produk+6',
  },
  {
    id: 7,
    name: 'Kalung Anjing',
    price: 'Rp50.000',
    image: 'https://via.placeholder.com/200?text=Produk+7',
  },
  {
    id: 8,
    name: 'Shampo Hewan',
    price: 'Rp70.000',
    image: 'https://via.placeholder.com/200?text=Produk+8',
  },
  {
    id: 9,
    name: 'Vitamin Kucing',
    price: 'Rp45.000',
    image: 'https://via.placeholder.com/200?text=Produk+9',
  },
  {
    id: 10,
    name: 'Cemilan Anjing',
    price: 'Rp90.000',
    image: 'https://via.placeholder.com/200?text=Produk+10',
  },
];

function Page() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
