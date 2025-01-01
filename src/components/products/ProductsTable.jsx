import { motion } from "framer-motion";

import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCTS_DATA = [
    {id : 1, name : 'Apple iPhone 12', category : 'Smartphone', price :  999, stock : 20, sales : 120},
    {id : 2, name : 'Samsung Galaxy S21', category : 'Smartphone', price :  899, stock : 15, sales : 100},
    {id : 3, name : 'Apple MacBook Pro', category : 'Laptop', price :  1299, stock : 10, sales : 80},
    {id : 4, name : 'Dell XPS 15', category : 'Laptop', price :  1199, stock : 5, sales : 50},
    {id : 5, name : 'Apple iPad Pro', category : 'Tablet', price :  799, stock : 25, sales : 150},

]

const ProductsTable = () => {   

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA)

    const handleSearch = (e) => {
        const term = e.toLowerCase()
        setSearchTerm(term)
        const filtered = PRODUCTS_DATA.filter((product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFilteredProducts(filtered)
    }

  return (
  <motion.div
    className="p-6 mb-8 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2}}
  >
    <div className="flex items-center justify-between mb-6">
        <h2 className="ml-4 text-2xl text-gray-100">Product Lists</h2>
        <div className="relative">
            <input type="text" placeholder="Search Products..." className="py-2 pl-10 pr-4 text-white placeholder-gray-400 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleSearch(e.target.value)} 
            value={searchTerm}
            />
            <Search className="absolute top-2.5 left-3  text-gray-400" size={18}/>
        </div>
    </div>
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
            <thead>
               <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Name
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Category
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Price
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Stock
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Sales
                </th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">
                    Actions
                </th>

               </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => (

                    <motion.tr key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3}}
                    className="border-b border-gray-700"
                    >
                        <td className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-gray-100 whitespace-nowrap">
                            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" className="mr-1 rounded-full size-10" alt="" />
                            {product.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                            {product.category}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                            $ {product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                            {product.stock}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                            {product.sales}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-100 whitespace-nowrap">
                            <button className="text-blue-400 hover:text-blue-500">
                                <Edit size={18}/>
                            </button>
                            <button className="ml-2 text-red-400 hover:text-red-500">
                                <Trash2 size={18}/>
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

export default ProductsTable;
