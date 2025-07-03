import { motion } from "framer-motion"
import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const yearlySalesData = [
    { name : 'Jan', sales : 4000 },
    { name : 'Feb', sales : 5000 },
    { name : 'Mar', sales : 7000 },
    { name : 'Apr', sales : 6000 },
    { name : 'May', sales : 8000 },
    { name : 'Jun', sales : 9000 },
    { name : 'Jul', sales : 10000 },
    { name : 'Aug', sales : 11000 },
    { name : 'Sep', sales : 12000 },
    { name : 'Oct', sales : 13000 },
    { name : 'Nov', sales : 14000 },
    { name : 'Dec', sales : 15000 },
]

const weeklySalesData = [
    { name : 'Mon', sales : 1000 },
    { name : 'Tue', sales : 2000 },
    { name : 'Wed', sales : 3000 },
    { name : 'Thu', sales : 4000 },
    { name : 'Fri', sales : 5000 },
    { name : 'Sat', sales : 6000 },
    { name : 'Sun', sales : 7000 },
]

const quarterlySalesData = [
    { name : 'Q1', sales : 10000 },
    { name : 'Q2', sales : 20000 },
    { name : 'Q3', sales : 30000 },
]

const monthlySalesData = [
    { name : 'Week 1', sales : 1000 },
    { name : 'Week 2', sales : 2000 },
    { name : 'Week 3', sales : 3000 },
    { name : 'Week 4', sales : 4000 },
]

const SalesOverviewChart = () => {

    const [nameTimeRange, setNameTimeRange] = useState('This Month')

    const [selectedTimeRange, setSelectedTimeRange] = useState(monthlySalesData)

    const handleNameTimeRange = (timeRange) => {
        setNameTimeRange(timeRange)
    
        switch(timeRange) {
            case 'This Week':
                setSelectedTimeRange(weeklySalesData)
                break
            case 'This Month':
                setSelectedTimeRange(monthlySalesData)
                break
            case 'This Quarter':
                setSelectedTimeRange(quarterlySalesData)
                break
            case 'This Year':
                setSelectedTimeRange(yearlySalesData)
                break
            default:
                setSelectedTimeRange(monthlySalesData)
    }
}

  return (
    <motion.div
    className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md "
        initial={{ opacity: 0, y : 20  }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay : .2, duration: 1 }}
    >
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-100">Sales Overview</h2>
            <select className="px-3 py-1 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            value={nameTimeRange} onChange={(e) => handleNameTimeRange(e.target.value)}>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
                <option value="This Quarter">This Quarter</option>
                <option value="This Year">This Year</option>
                
            </select>
        </div>
        <div className="w-full h-80">
            <ResponsiveContainer>
                <AreaChart data={selectedTimeRange}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>                
                <XAxis dataKey="name" stroke="#9CA3AF"/>
                <YAxis stroke="#9CA3AF"/>
                <Tooltip 
                contentStyle={{
                    backgroundColor: 'rgba(31,41,55,0.8)',
                    borderColor : '#374151'
                }}
                itemStyle={{ color: '#E5E7EB' }}
                />
                <Area type="monotone" dataKey="sales" stroke="#6366F1" fill="#6366F1" fillOpacity={.3} />
                </AreaChart>
            </ResponsiveContainer>
        </div>  
    </motion.div>
  )
}

export default SalesOverviewChart