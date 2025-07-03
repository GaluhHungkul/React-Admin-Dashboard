import { motion } from "framer-motion"
import {  LineChart, CartesianGrid,   Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


const dailyOdersData = [
    { name : '07,01', sales : 45 },
    { name : '07,02', sales : 50 },
    { name : '07,03', sales : 35 },
    { name : '07,04', sales : 30 },
    { name : '07,05', sales : 45 },
    { name : '07,06', sales : 50 },
    { name : '07,07', sales : 40 },
]


const DailyOrders = () => {
  return (
    <motion.div
      className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <h2 className="mb-4 text-lg font-medium text-gray-100">Daily Orders</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={dailyOdersData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey={`sales`}
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 1 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DailyOrders
