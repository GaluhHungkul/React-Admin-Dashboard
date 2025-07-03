import { motion } from "framer-motion"
import {  Clock, DollarSign,  ShoppingBagIcon, Timer,  } from "lucide-react"

import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard"
import DailyOrders from "../components/orders/DailyOrders"
import OrderStatusDistribution from "../components/orders/OrderStatusDistribution"
import OrdersTable from "../components/orders/OrdersTable"
import { useEffect, useState } from "react"


const OrdersPage = () => {
  
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      try {
          const res = await fetch(`${import.meta.env.VITE_API_ADMIN_ENDPOINT}/orders`)
          const data = await res.json()
        setOrders(data)
      } catch (error) {
        console.log("Error : " , error)
      }
    }
    getOrders()
  },[])

  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header title="Orders"/>
      
      <main className="px-4 mx-auto py-7 max-w-7xl lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 "
          initial={{ opacity: 0, y : 20  }}
          animate={{ opacity: 1, y : 0 }}
          transition={{ duration: 1 }}>
          <StatCard 
            name="Total Orders" icon={ShoppingBagIcon} value="1,045" color="#6366F1" />
          <StatCard 
            name="Pending Orders" value="56" icon={Clock} color="#F59E0B" />
          <StatCard 
            name="Completed Orders" icon={Timer} color="#6EE7B7" value="1,287" />
          <StatCard 
            name="Total Revenue" icon={DollarSign} value="$ 98,146" color="#ec4899" />
        </motion.div>
        <div className="grid grid-cols-1 gap-8 mt-8 mb-8 lg:grid-cols-2">
          <DailyOrders />
          <OrderStatusDistribution />
        </div>
        <OrdersTable orders={orders}/>

      </main>

    </div>
  )
}

export default OrdersPage