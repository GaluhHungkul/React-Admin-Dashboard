import { Bar, BarChart, CartesianGrid,  Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { motion } from "framer-motion"

const userActivityData = [
    { name : 'Mon', "0-4" : 20, "4-8" : 30, "8-12" : 40, "12-16" : 50, "16-20" : 60, "20-24" : 70 },
    { name : 'Tue', "0-4" : 30, "4-8" : 40, "8-12" : 50, "12-16" : 60, "16-20" : 70, "20-24" : 80 },
    { name : 'Wed', "0-4" : 40, "4-8" : 50, "8-12" : 60, "12-16" : 70, "16-20" : 80, "20-24" : 90 },
    { name : 'Thu', "0-4" : 50, "4-8" : 60, "8-12" : 70, "12-16" : 80, "16-20" : 90, "20-24" : 100 },
    { name : 'Fri', "0-4" : 60, "4-8" : 70, "8-12" : 80, "12-16" : 90, "16-20" : 100, "20-24" : 110 },
    { name : 'Sat', "0-4" : 70, "4-8" : 80, "8-12" : 90, "12-16" : 100, "16-20" : 110, "20-24" : 120 },
    { name : 'Sun', "0-4" : 80, "4-8" : 90, "8-12" : 100, "12-16" : 110, "16-20" : 120, "20-24" : 130 },
]

const UserActivityHeatmap = () => {
  return (
    <motion.div
    className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay : .4 }}
    >
        <h2 className='mb-4 text-lg font-medium text-gray-100'>User Activity Heatmap</h2>
        <div className="h-80 ">
                    <ResponsiveContainer>
                        <BarChart
                        data={userActivityData}
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
                                dataKey={'0-4'}
                                stackId='a'
                                fill="#8b84d8"
                            />
                            <Bar
                                dataKey={'4-8'}
                                stackId='a'
                                fill="#10B981"
                            />
                            <Bar
                                dataKey={'8-12'}
                                stackId='a'
                                fill="#3B82F6"
                            />
                            <Bar
                                dataKey={'12-16'}
                                stackId='a'
                                fill="#6366F1"
                            />
                            <Bar
                                dataKey={'16-20'}
                                stackId='a'
                                fill="#EC4899"
                            />
                            <Bar
                                dataKey={'20-24'}
                                stackId='a'
                                fill="#F59E0B"
                            />
                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
    </motion.div>
  )
}

export default UserActivityHeatmap