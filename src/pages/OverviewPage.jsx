import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesChannelStart from "../components/overview/SalesChannelStart"

const salesData = [
  { name : 'Jul', sales : 4200 },
  { name : 'Aug', sales : 3200 },
  { name : 'Sep', sales : 5200 },
  { name : 'Oct', sales : 4200 },
  { name : 'Nov', sales : 6200 },
  { name : 'Dec', sales : 5200 },
  { name : 'Jan', sales : 7200 },
  { name : 'Feb', sales : 6200 },
  { name : 'Mar', sales : 8200 },
  { name : 'Apr', sales : 7200 },
  { name : 'May', sales : 9200 },
  { name : 'Jun', sales : 8200 },
]

const OverviewPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Overview"/>

      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 "
          initial={{ opacity: 0, y : 20  }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard 
            name="Total Users" icon={Zap} value="$ 12,345" color="#6366F1" />
          <StatCard 
            name="New Users Today" value="567" icon={ShoppingBag} color="#EC4899" />
          <StatCard 
            name="Active Users" icon={Users} color="#8B5CF6" value="1,234" />
          <StatCard 
            name="Churn Rate" icon={BarChart2} value="12,5%" color="#10B981" />
        </motion.div>

        {/* Charts */}
       
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesOverviewChart data={salesData} kataKunci={'sales'} title="Sales Overview"/>
          <CategoryDistributionChart title="Category Distribution" colspan=""/>
          <SalesChannelStart title="Sales by Channel" colspan="lg:col-span-2"/>
        </div>

      </main>

    </div>
  )
}

export default OverviewPage