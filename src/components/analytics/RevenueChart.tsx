import { motion } from "framer-motion"
import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"


const revenueData = [
    { month : 'Jan', revenue : 4000, target : 6800 },
    { month : 'Feb', revenue : 6000, target : 7500 },
    { month : 'Mar', revenue : 8000, target : 7700 },
    { month : 'Apr', revenue : 9000, target : 6500 },
    { month : 'May', revenue : 11000, target : 8500 },
    { month : 'Jun', revenue : 13000, target : 11500 },
    { month : 'Jul', revenue : 15000, target : 14500 },
    { month : 'Aug', revenue : 17000, target : 16000 },
    { month : 'Sep', revenue : 20000, target : 19500 },
    { month : 'Oct', revenue : 25000, target : 24500 },
    { month : 'Nov', revenue : 30000, target : 26500 },
    { month : 'Dec', revenue : 35000, target : 30500 }  
]

const RevenueChart = () => {

    const [selectedMonth, setSelectedMonth] = useState('Jan')

    const handleSelectedMonth = (month) => {
        setSelectedMonth(month)
    }
    
  return (
    <motion.div
    className="p-6 bg-gray-800 rounded-lg shadow-md"
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay : .2 }}
    >
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-100">Revenue vs Target</h2>
            <select className="px-3 py-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={selectedMonth} onChange={(e) => handleSelectedMonth(e.target.value)}>
                {revenueData.map((data) => (
                    <option key={data.month} value={data.month}>{data.month}</option>
                ))}
            </select>
        </div>
        <div className="w-full h-80">
            <ResponsiveContainer>
                <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>                
                <XAxis dataKey="month" stroke="#9CA3AF"/>
                <YAxis stroke="#9CA3AF"/>
                <Tooltip 
                contentStyle={{
                    backgroundColor: 'rgba(31,41,55,0.8)',
                    borderColor : '#374151'
                }}
                itemStyle={{ color: '#E5E7EB' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#6366F1" fill="#6366F1" fillOpacity={.3} />
                <Area type="monotone" dataKey="target" stroke="#6EE7B7" fill="#6EE7B7" fillOpacity={.3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>  

    </motion.div>
  )
}

export default RevenueChart