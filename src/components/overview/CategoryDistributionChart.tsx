import { motion } from "framer-motion"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981','#F59E0B']

const CategoryDistributionChart = ({title, colspan, data=[{ name: 'Electronics', value: 4500 },{ name: 'Clothing', value: 3000 },{ name: 'Furniture', value: 2000 },{ name: 'Others', value: 1000 },{ name: 'Books', value: 2000 },]}) => {
  return (
    <motion.div
    className={`p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-md backdrop-blur-sm rounded-xl  ${colspan}`}
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay: 0.3 }}
    >
        <h2 className="mb-4 text-lg font-medium text-gray-100">{title}</h2>
        <div className="h-80">
            <ResponsiveContainer
            width={'100%'}
            height={'100%'}
            >
                <PieChart>
                    <Pie 
                    data={data}
                    cx={'50%'}
                    cy={'50%'}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    {data.map((item,index) => (
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