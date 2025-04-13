import React from 'react';

function Orders() {
  const orders = [
    {
      id: 'ORD1001',
      product: 'Fiddle Leaf Fig',
      date: '2025-04-10',
      total: 49.99,
      status: 'Delivered',
    },
    {
      id: 'ORD1002',
      product: 'Aloe Vera Plant',
      date: '2025-04-08',
      total: 29.99,
      status: 'In Transit',
    },
    {
      id: 'ORD1003',
      product: 'Peace Lily',
      date: '2025-04-01',
      total: 39.5,
      status: 'Processing',
    },
    {
      id: 'ORD1004',
      product: 'Snake Plant',
      date: '2025-03-25',
      total: 34.75,
      status: 'Cancelled',
    },
  ];

  const statusStyles = {
    Delivered: 'bg-green-100 text-green-700',
    'In Transit': 'bg-yellow-100 text-yellow-700',
    Processing: 'bg-blue-100 text-blue-700',
    Cancelled: 'bg-red-100 text-red-700',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">🧾 My Orders</h1>

      <div className="overflow-x-auto bg-white p-6 rounded-2xl shadow-md">
        <table className="w-full table-auto border border-gray-200 text-sm md:text-base">
          <thead className="bg-green-50 border-b">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{order.id}</td>
                <td className="px-4 py-3">{order.product}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3 font-medium text-green-600">${order.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status as keyof typeof statusStyles]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
