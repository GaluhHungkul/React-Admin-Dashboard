import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob@example.com",
    role: "Moderator",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    role: "Customer",
    status: "Active",
  },
];

const UsersTable = () => {


  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = usersData.filter((user) =>
      user.name.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
      const getUsers = async () => {
        const res = await fetch(`http://localhost:3000/api/admin/users`)
        const {users} = await res.json()
        setFilteredUsers(users)
        console.log(users)
      }
      getUsers()
  },[])

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
                Username
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Role
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Member
              </th>
              <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-700"
              >
                <td className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                  <img
                    src="https://images.unsplash.com/photo-1711283804096-7b8516ba60c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFydXRvfGVufDB8fDB8fHww"
                    className="mr-1 rounded-full size-10"
                    alt=""
                  />
                  {user.username}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap ">
                  <p className="w-20 px-2 py-1 text-center bg-blue-500 rounded">{user.role}</p>
                </td>
                <td
                  className={`px-6 py-4 text-sm text-gray-100 whitespace-nowrap ${
                    user.member === "Active" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {(user.isMember + "").toUpperCase()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                  <button className="text-blue-400 hover:text-blue-500">
                    <Edit size={18} />
                  </button>
                  <button className="ml-2 text-red-400 hover:text-red-500">
                    <Trash2 size={18} />
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
