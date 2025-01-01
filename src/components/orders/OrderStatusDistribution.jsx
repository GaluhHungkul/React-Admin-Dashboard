import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const categoryData = [
    { name: 'Shipped', value: 4500 },
    { name: 'Pending', value: 3000 },
    { name: 'Delivered', value: 2000 },
    { name: 'Cancelled', value: 1000 },
    { name: 'Returned', value: 2000 },
]

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981','#F59E0B']

const CategoryDistributionChart = () => {
  return (
    <motion.div
    className={`p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-md backdrop-blur-sm rounded-xl  `}
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay: 0.3 }}
    >
        <h2 className="mb-4 text-lg font-medium text-gray-100">Order Status Distribution</h2>
        <div className="h-80">
            <ResponsiveContainer
            width={'100%'}
            height={'100%'}
            >
                <PieChart>
                    <Pie 
                    data={categoryData}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    {categoryData.map((item,index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                    </Pie>
                    <Tooltip 
                    contentStyle={{
                        background: 'rgba(31,41,55,0.8)',
                        borderColor : "#4B5563"
                    }}
                    itemStyle={{color : '#e5e7eb'}}
                    />
                    <Legend />
                </PieChart>

            </ResponsiveContainer>
        </div>
        
    </motion.div>
  )
}

export default CategoryDistributionChart