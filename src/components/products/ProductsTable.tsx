import { motion } from "framer-motion";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Table from "./Table";
import { Product } from "../../types/product";


const ProductsTable = () => {   

    const [searchTerm, setSearchTerm] = useState('')    
    const [products, setProducts] = useState<Product[]>([])

    const handleSearch = (e:string) => {
        const term = e.toLowerCase()
        setSearchTerm(term)
        const filtered = products.filter((product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setProducts(filtered)
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
        <Table />
      </div>
  </motion.div>
  );
};

export default ProductsTable;
