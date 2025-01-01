import { motion } from "framer-motion";
import {   EyeIcon, Search, } from "lucide-react";
import { useState } from "react";

const ordersData = [
    { orderId : 'ORD001', customer : 'John Doe', total : 235.40, status : 'Delivered', date : '2021-07-01' },
    { orderId : 'ORD003', customer : 'Arthoria Pendragon', total : 235.40, status : 'Delivered', date : '2021-07-03' },
    { orderId : 'ORD002', customer : 'Emiya Shirou', total : 135.40, status : 'Pending', date : '2021-07-02' },
    { orderId : 'ORD004', customer : 'Emiya Kiritsugu', total : 135.40, status : 'Pending', date : '2021-07-04' },
    { orderId : 'ORD005', customer : 'Gilgamesh', total : 235.40, status : 'Delivered', date : '2021-07-05' },
    { orderId : 'ORD007', customer : 'Heracles', total : 235.40, status : 'Delivered', date : '2021-07-07' },
    { orderId : 'ORD006', customer : 'Kotomine Kirei', total : 135.40, status : 'Pending', date : '2021-07-06' },
    { orderId : 'ORD008', customer : 'Fujimaru Ritsuka', total : 135.40, status : 'Pending', date : '2021-07-08' },
    { orderId : 'ORD009', customer : 'Arthur', total : 235.40, status : 'Delivered', date : '2021-07-09' },
    { orderId : 'ORD011', customer : 'Mordred', total : 235.40, status : 'Delivered', date : '2021-07-11' },
    { orderId : 'ORD010', customer : 'Nero Claudius', total : 135.40, status : 'Pending', date : '2021-07-10' },
    { orderId : 'ORD012', customer : 'Rasputin', total : 135.40, status : 'Pending', date : '2021-07-12' },
    { orderId : 'ORD013', customer : 'Arjuna ', total : 235.40, status : 'Delivered', date : '2021-07-13' },
    { orderId : 'ORD015', customer : 'Arcueid', total : 235.40, status : 'Delivered', date : '2021-07-15' },
    { orderId : 'ORD014', customer : 'Arash Kamangir', total : 135.40, status : 'Pending', date : '2021-07-14' },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setfilteredOrders] = useState(ordersData);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = ordersData.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setfilteredOrders(filtered);
  };

  return (
    <motion.div
      className="p-6 mb-8 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="ml-4 text-2xl text-gray-100">User Lists</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search User..."
            className="py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
          <Search
            className="absolute top-2.5 left-3  text-gray-400"
            size={18}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                ORDER ID
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                CUSTOMER
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                TOTAL
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                STATUS
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                DATE
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((user) => (
              <motion.tr
                key={user.orderId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-700"
              >
                <td className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                  {user.orderId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  {user.customer}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap ">
                  <p className="w-20 px-2 py-1 ">$ {user.total}</p>
                </td>
                <td
                  className={`px-6 py-4 text-sm text-gray-100 whitespace-nowrap ${user.status == 'Delivered' ? 'text-green-400' : 'text-yellow-400'}`}
                >
                  {user.status}
                </td>
                <td
                  className={`px-6 py-4 text-sm text-gray-100 whitespace-nowrap `}
                >
                  {user.date}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  <button title="Show Detail Order" className="text-blue-400 hover:text-blue-500">
                    <EyeIcon size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default UsersTable;
