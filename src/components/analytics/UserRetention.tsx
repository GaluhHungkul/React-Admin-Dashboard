import { motion } from "framer-motion"
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, LineChart } from "recharts"

const useRetentionData = [
  { name : 'Week 1', retention : 100 },
  { name : 'Week 2', retention : 75 },
  { name : 'Week 3', retention : 60 },
  { name : 'Week 4', retention : 50 },
  { name : 'Week 5', retention : 45 },
  { name : 'Week 6', retention : 40 },
  { name : 'Week 7', retention : 38 },
  { name : 'Week 8', retention : 35 },
]

const UserRetention = () => {
  return (
    <motion.div
    className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-lg backdrop-filter rounded-xl"
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay: .5 }}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-100">User Retention</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
            <LineChart data={useRetentionData}>
                <CartesianGrid strokeDasharray='3 3' stroke="#374151"/>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af"/>
                <Tooltip 
                contentStyle={{
                    backgroundColor: "#1F2937",
                    borderColor: "#485563"
                }}
                itemStyle={{
                  color : '#e5e7eb'
                }}
                />
                <Legend />
                <Line type='monotone' dataKey='retention' stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
      </div>


    </motion.div>
  )
}

export default UserRetention