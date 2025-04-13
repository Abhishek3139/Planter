import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';// Optional: for conditional classNames if you're using a utility function

export default function AdminSidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Add Plant', icon: '➕', path: '/admin/plant' },
    { label: 'Orders', icon: '📦', path: '/admin/orders' },
  ];

  return (
    <aside className='w-64 min-h-screen bg-white border-r border-gray-200 shadow-lg p-6'>
      <h2 className='text-2xl font-bold mb-10 text-green-600 flex items-center gap-2'>
        🌱 <span>Admin</span>
      </h2>
      <nav className='space-y-3'>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all',
                isActive
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
              )}
            >
              <span className='text-lg'>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
