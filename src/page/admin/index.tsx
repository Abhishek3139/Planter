
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell,
    LineChart, Line, Legend,
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
  } from 'recharts';
import AdminSidebar from '../../components/admin/sidebar';
  
  const COLORS = ['#4ade80', '#60a5fa', '#facc15', '#f87171'];
  
  const stockData = [
    { name: 'Succulent', stock: 12 },
    { name: 'Fern', stock: 7 },
    { name: 'Palm', stock: 10 },
    { name: 'Cactus', stock: 5 },
  ];
  
  const categoryData = [
    { name: 'Indoor', value: 40 },
    { name: 'Outdoor', value: 30 },
    { name: 'Succulents', value: 20 },
    { name: 'Flowering', value: 10 },
  ];
  
  const salesData = [
    { month: 'Jan', sales: 300 },
    { month: 'Feb', sales: 450 },
    { month: 'Mar', sales: 320 },
    { month: 'Apr', sales: 500 },
    { month: 'May', sales: 610 },
  ];
  
  const popularityData = [
    { category: 'Succulent', popularity: 90 },
    { category: 'Fern', popularity: 70 },
    { category: 'Palm', popularity: 65 },
    { category: 'Cactus', popularity: 85 },
    { category: 'Orchid', popularity: 50 },
  ];
  
  const plantTableData = [
    { id: 1, name: 'Snake Plant', price: '$15', stock: 10 },
    { id: 2, name: 'Spider Plant', price: '$12', stock: 8 },
    { id: 3, name: 'ZZ Plant', price: '$20', stock: 6 },
    { id: 4, name: 'Peace Lily', price: '$18', stock: 4 },
  ];
  
  export default function AdminDashboard() {
    return (
      <div className='flex h-screen bg-gray-100'>
        {/* Sidebar */}
        {/* <aside className='w-64 bg-white shadow-lg p-6 border-r border-gray-200'>
          <h2 className='text-2xl font-bold mb-8 text-green-600'>🌱 Admin Dashboard</h2>
          <nav className='space-y-4'>
            <Link to='/admin/plant' className='text-green-700 font-medium hover:text-green-500'>➕ Add Plant</Link>
            <a href='/admin/dashboard' className='text-green-700 font-medium hover:text-green-500'>📊 Dashboard</a>
            <Link to='/admin/orders' className='text-green-700 font-medium hover:text-green-500'>📦 Orders</Link>
          </nav>
        </aside> */}
        <AdminSidebar/>
  
        {/* Main */}
        <main className='flex-1 overflow-auto p-8 space-y-12'>
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>Overview</h1>
  
          {/* Charts Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {/* Bar Chart */}
            <div className='bg-white shadow rounded-2xl p-4'>
              <h2 className='font-semibold text-lg mb-2'>Plant Stock</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={stockData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stock" fill="#4ade80" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
  
            {/* Pie Chart */}
            <div className='bg-white shadow rounded-2xl p-4'>
              <h2 className='font-semibold text-lg mb-2'>Category Share</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
                    {categoryData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
  
            {/* Line Chart */}
            <div className='bg-white shadow rounded-2xl p-4 col-span-1 xl:col-span-2'>
              <h2 className='font-semibold text-lg mb-2'>Monthly Sales</h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={salesData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#60a5fa" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
  
            {/* Radar Chart */}
            <div className='bg-white shadow rounded-2xl p-4 col-span-full'>
              <h2 className='font-semibold text-lg mb-2'>Popularity</h2>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={popularityData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="category" />
                  <PolarRadiusAxis />
                  <Radar name="Popularity" dataKey="popularity" stroke="#f87171" fill="#f87171" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
  
          {/* Table Section */}
          <div className='bg-white shadow-lg rounded-2xl p-6'>
            <h2 className='text-xl font-semibold mb-4'>🪴 Available Plants</h2>
            <div className='overflow-x-auto'>
              <table className='min-w-full table-auto text-sm text-gray-700'>
                <thead className='bg-green-100 text-green-800'>
                  <tr>
                    <th className='py-3 px-4 text-left'>#</th>
                    <th className='py-3 px-4 text-left'>Name</th>
                    <th className='py-3 px-4 text-left'>Price</th>
                    <th className='py-3 px-4 text-left'>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  {plantTableData.map((plant) => (
                    <tr key={plant.id} className='hover:bg-green-50 transition'>
                      <td className='py-2 px-4'>{plant.id}</td>
                      <td className='py-2 px-4'>{plant.name}</td>
                      <td className='py-2 px-4'>{plant.price}</td>
                      <td className='py-2 px-4'>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${plant.stock > 5 ? 'bg-green-200 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {plant.stock}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
  