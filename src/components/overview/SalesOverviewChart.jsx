import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'




const SalesOverviewChart = ({data, title, kataKunci}) => {
  return (
    <motion.div
        className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg rounded-xl backdrop-blur-md"
        initial={{ opacity: 0, y : 20  }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ delay : .2, duration: 1 }}
    >
        <h2 className='mb-4 text-lg font-medium text-gray-100'>{title}</h2>

        <div className='h-80'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray='3 3'  stroke='#4B5563'/>
                    <XAxis dataKey="name" stroke='#9ca3af'  />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'rgba(31,41,55,0.8)',  
                            borderColor : '#4B5563', 
                        }}
                        itemStyle={{ color: '#E5E7EB' }}
                    />
                        <Line 
                        type='monotone'
                        dataKey={`${kataKunci}`}
                        stroke='#6366F1'
                        strokeWidth={3}
                        dot={{ fill: '#6366F1', strokeWidth : 2, r : 1 }}
                        activeDot={{r : 8, strokeWidth : 2}}
                        />    

                    
                </LineChart>
            </ResponsiveContainer>
        </div>

    </motion.div>
  )
}

export default SalesOverviewChart