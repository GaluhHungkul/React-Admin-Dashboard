import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"
import SalesOverviewChart from "../components/sales/SalesOverviewChart"
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart"
import DailySalesTrend from "../components/sales/DailySalesTrend"



const SalesPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
        <Header title="Sales"/>
        <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
          {/* Sales Stats */}

          <motion.div
            className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <StatCard 
            name="Total Revenue" icon={DollarSign} value="$ 1,012,345" color="#6366F1" />
          <StatCard 
            name="Average Order Value" value="$ 123" icon={ShoppingCart} color="#10B981" />
          <StatCard 
            name="Conversion Rate" icon={TrendingUp} color="#F59E0B" value="12,5%" />
          <StatCard 
            name="Growth Rate" icon={CreditCard} value="12%" color="#EF4444" />
            
          </motion.div>
          {/* Charts */}
            <SalesOverviewChart />
          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2 ">
            <SalesByCategoryChart />
            <DailySalesTrend />
          </div>
          
        </main>
    </div>
  )
}

export default SalesPage