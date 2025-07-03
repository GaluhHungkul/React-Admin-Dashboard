import { motion } from "framer-motion"


import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import {   UserCheck, UserPlus,  UsersIcon, UserX } from "lucide-react"
import UsersTable from "../components/users/UsersTable"
import SalesOverviewChart from "../components/overview/SalesOverviewChart"
import UserActivityHeatmap from "../components/users/UserActivityHeatmap"
import UserDemographicsChart from "../components/users/UserDemographicsChart"

const usersGrowthData = [
    { name : 'Jul', users : 4200 },
    { name : 'Aug', users : 3200 },
    { name : 'Sep', users : 5200 },
    { name : 'Oct', users : 4200 },
    { name : 'Nov', users : 6200 },
    { name : 'Dec', users : 5200 },
    { name : 'Jan', users : 7200 },
    { name : 'Feb', users : 6200 },
    { name : 'Mar', users : 8200 },
    { name : 'Apr', users : 7200 },
    { name : 'May', users : 9200 },
    { name : 'Jun', users : 8200 },
]

const UsersPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Users"/>
      <main className="px-4 py-6 mx-auto max-w-7xl lg:px-8">
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 "
          initial={{ opacity: 0, y : 20  }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1 }}
        >
        <StatCard 
            name="Total Users" icon={UsersIcon} value="$ 12,345" color="#6366F1" />
          <StatCard 
            name="New Users Today" value="567" icon={UserPlus} color="#10B981" />
          <StatCard 
            name="Active Users" icon={UserCheck} color="#F59E0B" value="1,234" />
          <StatCard 
            name="Churn Rate" icon={UserX} value="12,5%" color="#EF4444" />
        </motion.div>
        <UsersTable />
        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SalesOverviewChart data={usersGrowthData} kataKunci='users' title="User Growth"/>
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
        </main>
    </div>
  )
}

export default UsersPage