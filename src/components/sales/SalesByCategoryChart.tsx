import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const salesByCategory = [
    { name : 'Electronics', sales : 400 },
    { name : 'Clothing', sales : 300 },
    { name : 'Home & Garden', sales : 200 },
    { name : 'Others', sales : 100 },
    { name : 'Books', sales : 250 },
]

const COLORS = ['#8884D8', '#82CA9D', '#FFC658', '#FF8042','#0088FE']

const totalSales = salesByCategory.reduce((acc, curr) => acc + curr.sales, 0)

const SalesByCategoryChart = () => {
    
  return (
    <motion.div
    className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
        initial={{ opacity: 0, y : 20  }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay : .3}}
    >
        
        <h2 className="text-xl font-semibold text-gray-100">Sales by Category</h2>
        <div className="w-full h-80">
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={salesByCategory}
                        cx={"50%"}
                        cy={"50%"}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey='sales'
                        label={({name, sales}) => `${name} ${(sales / totalSales * 100).toFixed(0)}%`}
                    >
                        {salesByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                    contentStyle={{
                        backgroundColor: 'rgba(31, 41,55, 0.8)',
                        borderColor: '#374151'
                    }}
                    itemStyle={{
                        color: '#E5E7EB'
                    }}
                    />
                    <Legend />    
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesByCategoryChart