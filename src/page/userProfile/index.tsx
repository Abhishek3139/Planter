function UserProfile() {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    address: '123 Greenhouse Lane, Plant City, FL 54321',
  };

  const orders = [
    { id: 'ORD123', productName: 'Monstera Deliciosa', date: '2025-04-01', amount: 45.99 },
    { id: 'ORD124', productName: 'Snake Plant', date: '2025-03-15', amount: 29.99 },
  ];

  const tracking = [
    {
      trackingNumber: '123456789012',
      scanEvents: [
        { eventDescription: 'Delivered', derivedStatus: 'Completed', date: '2025-04-03' },
        { eventDescription: 'Out for delivery', derivedStatus: 'In Transit', date: '2025-04-03' },
        { eventDescription: 'Arrived at facility', derivedStatus: 'In Transit', date: '2025-04-02' },
      ],
    },
  ];

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-12">🌿 My Profile</h1>

      {/* Personal Info */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">👤 Personal Information</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Address:</span> {user.address}</p>
        </div>
      </div>

      {/* Orders */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">🛒 Order History</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm md:text-base">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 border-t">
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.productName}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2 text-green-600 font-semibold">${order.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tracking */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">🚚 Delivery Status</h2>
        <p className="mb-2 text-gray-700">
          <span className="font-medium">Tracking Number:</span> {tracking[0].trackingNumber}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 text-sm md:text-base">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left">Event</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {[...tracking[0].scanEvents].reverse().map((event, i) => (
                <tr key={i} className="hover:bg-gray-50 border-t">
                  <td className="px-4 py-2">{event.eventDescription}</td>
                  <td className="px-4 py-2">{event.derivedStatus}</td>
                  <td className="px-4 py-2">{event.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
