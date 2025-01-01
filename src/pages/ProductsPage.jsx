import { motion } from "framer-motion"
import { AlertTriangle,  DollarSign, Package,  TrendingUp  } from "lucide-react"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import ProductsTable from "../components/products/ProductsTable"
import SalesTrendChart from "../components/products/SalesTrendChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"

const salesTrend = [
  { name : 'Jul', sales : 1200 },
  { name : 'Aug', sales : 2200 },
  { name : 'Sep', sales : 1300 },
  { name : 'Oct', sales : 1800 },
  { name : 'Nov', sales : 4000 },
  { name : 'Dec', sales : 5200 },
  { name : 'Jan', sales : 1800 },
  { name : 'Feb', sales : 3200 },
  { name : 'Mar', sales : 4200 },
  { name : 'Apr', sales : 5900 },
  { name : 'May', sales : 1300 },
  { name : 'Jun', sales : 4900 },
]

const ProductsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Products"/>
      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 "
          initial={{ opacity: 0, y : 20  }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard 
            name="Total Products" icon={Package} value="$ 12,345" color="#6366F1" />
          <StatCard 
            name="Top Selling" icon={TrendingUp} color="#8B5CF6" value="1,234" />
          <StatCard 
            name="Low Stock" value="567" icon={AlertTriangle} color="#EC4899" />
          <StatCard 
            name="Total Revenue" icon={DollarSign} value="12,5%" color="#10B981" />
        </motion.div>
        <ProductsTable />
        {/* Charts */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesTrendChart data={salesTrend} kataKunci='sales' title="Sales Trend"/>
          <CategoryDistributionChart title="Sales by Channel" colspan=""/>
        </div>
      </main>
    </div>  
  )
}

export default ProductsPage