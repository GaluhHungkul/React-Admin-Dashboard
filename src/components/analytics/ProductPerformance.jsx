import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const productPerformanceData = [
  {  name : 'Product 1', value : 4000 },
  {  name : 'Product 2', value : 3000 },
  {  name : 'Product 3', value : 5000 },
  {  name : 'Product 4', value : 4000 },
  {  name : 'Product 5', value : 6000 },
]

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981','#F59E0B']


const ProductPerformance = () => {
  return (
    <motion.div
        className={` p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-md rounded-xl `}
        initial={{ opacity: 0, y : 20  }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay: 0.4 }}
    >
        <h2 className="mb-4 text-lg font-medium text-gray-100">Product Performance</h2>
        <div className="h-80 ">
            <ResponsiveContainer>
                <BarChart
                data={productPerformanceData}
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
                        dataKey={'value'}
                        fill="#8b84d8"
                    >
                        {productPerformanceData.map((entry,index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>

    </motion.div>
  )
}

export default ProductPerformance