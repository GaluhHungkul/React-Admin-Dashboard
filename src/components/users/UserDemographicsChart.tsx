import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { motion } from 'framer-motion'


const userDemographicsData = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 30 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 10 },
]

const COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#10B981','#F59E0B']

const UserDemographicsChart = () => {
  return (
    <motion.div
    className={`p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-md backdrop-blur-sm rounded-xl lg:col-span-2`}
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay: 0.3 }}
    >
        <h2 className="mb-4 text-lg font-medium text-gray-100">User Demographics</h2>
        <div className="h-80">
                    <ResponsiveContainer
                    width={'100%'}
                    height={'100%'}
                    >
                        <PieChart>
                            <Pie 
                            data={userDemographicsData}
                            cx={'50%'}
                            cy={'50%'}
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name,percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                            {userDemographicsData.map((item,index) => (
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

export default UserDemographicsChart