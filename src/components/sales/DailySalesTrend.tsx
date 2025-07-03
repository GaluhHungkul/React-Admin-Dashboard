import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid,  Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const dailySalesData = [
    { name : 'Mon', sales : 4000 },
    { name : 'Tue', sales : 4500 },
    { name : 'Wed', sales : 3000 },
    { name : 'Thu', sales : 5500 },
    { name : 'Fri', sales : 6000 },
    { name : 'Sat', sales : 5000 },
    { name : 'Sun', sales : 7500 },
]
const DailySalesTrend = () => {
  return (
     <motion.div
            className={` p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl `}
            initial={{ opacity: 0, y : 20  }}
            animate={{ opacity: 1, y : 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="mb-4 text-lg font-medium text-gray-100">Daily Sales Trend</h2>
            <div className="w-full h-80">
                <ResponsiveContainer>
                    <BarChart
                    data={dailySalesData}
                    >
                        <CartesianGrid strokeDasharray='3 3' stroke="#4b5563"/>
                        <XAxis dataKey='name' stroke="#9ca3af"/>
                        <YAxis  stroke="#9ca3af"/>
                        <Tooltip 
                            contentStyle={{
                                backgroundColor : 'rgba(31,41,55,0.8)',
                                borderColor : '#4b5563'
                            }}
                            itemStyle={{color : '#e5e7eb'}}
                        />
                        <Legend />
                        <Bar
                            dataKey={'sales'}
                            fill="#10b981"
                        >
                            
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
    
        </motion.div>
  )
}

export default DailySalesTrend