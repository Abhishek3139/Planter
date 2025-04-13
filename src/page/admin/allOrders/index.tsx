
const orders = [
  {
    id: 'ORD001',
    customer: 'Alice Johnson',
    email: 'alice@example.com',
    total: '$45.00',
    status: 'Delivered',
    date: '2025-04-10',
  },
  {
    id: 'ORD002',
    customer: 'Bob Smith',
    email: 'bob@example.com',
    total: '$78.50',
    status: 'Shipped',
    date: '2025-04-12',
  },
  {
    id: 'ORD003',
    customer: 'Sarah Lee',
    email: 'sarah@example.com',
    total: '$25.99',
    status: 'Pending',
    date: '2025-04-13',
  },
  {
    id: 'ORD004',
    customer: 'John Doe',
    email: 'john@example.com',
    total: '$120.00',
    status: 'Cancelled',
    date: '2025-04-09',
  },
];

const statusColors: Record<string, string> = {
  Delivered: 'bg-green-100 text-green-800',
  Shipped: 'bg-blue-100 text-blue-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

export default function AdminOrders() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>📦 All Orders</h1>
      <div className='bg-white shadow rounded-2xl overflow-auto'>
        <table className='min-w-full text-sm'>
          <thead className='bg-green-100 text-green-900'>
            <tr>
              <th className='px-6 py-3 text-left'>Order ID</th>
              <th className='px-6 py-3 text-left'>Customer</th>
              <th className='px-6 py-3 text-left'>Email</th>
              <th className='px-6 py-3 text-left'>Total</th>
              <th className='px-6 py-3 text-left'>Date</th>
              <th className='px-6 py-3 text-left'>Status</th>
            </tr>
          </thead>
          <tbody className='text-gray-700'>
            {orders.map((order, i) => (
              <tr key={i} className='hover:bg-green-50 transition'>
                <td className='px-6 py-4 font-medium'>{order.id}</td>
                <td className='px-6 py-4'>{order.customer}</td>
                <td className='px-6 py-4'>{order.email}</td>
                <td className='px-6 py-4'>{order.total}</td>
                <td className='px-6 py-4'>{order.date}</td>
                <td className='px-6 py-4'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>
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
