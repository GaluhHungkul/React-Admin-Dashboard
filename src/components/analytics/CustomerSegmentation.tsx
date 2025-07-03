import { motion } from "framer-motion"
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip } from "recharts"

const customerSegmentation = [
  { subject : 'Engagement', A : 120, B : 110, fullMark : 150 },
  { subject : 'Loyalty', A : 98, B : 130, fullMark : 150 },
  { subject : 'Satisfaction', A : 86, B : 130, fullMark : 150 },
  { subject : 'Spend', A : 99, B : 100, fullMark : 150 },
  { subject : 'Frequency', A : 85, B : 90, fullMark : 150 },
  { subject : 'Recency', A : 65, B : 90, fullMark : 150 },

]


const CustomerSegegmentation = () => {
  return (
    <motion.div
    className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl backdrop-filter backdrop-blur-lg "   
    initial={{ opacity: 0, y : 20  }}
    animate={{ opacity: 1, y : 0 }}
    transition={{ delay: .6 }}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-100">Customer Segmentation</h2>
      <div className="w-full h-80">
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={customerSegmentation}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
            <PolarRadiusAxis angle={30} domain={[0,150]} stroke="#9ca3af" /> 
            <Radar name="Segment A" dataKey='A' stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={.6}/>
            <Radar name="Segment B" dataKey='B' stroke="#10b981" fill="#10b981" fillOpacity={.6}/>
            <Legend />
            <Tooltip 
              contentStyle={{ backgroundColor: "#1f2937", borderColor : "#4b5563" }}
              // labelStyle={{ color: "#9ca3af" }}
              itemStyle={{ color: "#e5e7eb" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>


    </motion.div>
  )
}

export default CustomerSegegmentation