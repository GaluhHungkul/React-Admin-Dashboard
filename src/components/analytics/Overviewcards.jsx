import { motion } from "framer-motion"
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight, Icon  } from "lucide-react"

const overviewData = [
    {
        name: " Revenue",
        value: "$ 98,146",
        icon: DollarSign,
        color: "#6366F1",
        change : 12.5
    },
    {
        name: " Users",
        value: "1,045",
        icon: Users,
        color: "#F59E0B",
        change : 2.5,
    },
    {
        name: "Orders",
        value: "56",
        icon: ShoppingBag,
        color: "#6EE7B7",
        change : -5.5,
    },
    {
        name: "Page Views",
        value: "2,356",
        icon: Eye,
        color: "#ec4899",
        change : 1.5,
    },
]

const Overviewcards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 ">
        {overviewData.map((item, index) => (
            <motion.div key={item.name}
                className="p-6 bg-gray-800 bg-opacity-50 border border-gray-700 shadow-lg backdrop-blur-lg backdrop-filter rounded-xl"
                initial={{ opacity: 0, y : 20  }}
                animate={{ opacity: 1, y : 0 }}
                transition={{  delay: index * 0.1 }}
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-medium text-gray-400">{item.name}</h3>
                        <p className="mt-1 text-xl font-semibold text-gray-100">{item.value}</p>
                    </div>
                    <div className={`p-3 rounded-full bg-opacity-20 ${item.change > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                       <item.icon 
                       className={`size-6 ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`} />
                  
                    </div>
                </div>
                <div className={`mt-4 flex items-center ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change > 0 ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                    <p className="ml-1 text-sm">{Math.abs(item.change)}%</p>
                    <span className="ml-1 text-sm text-gray-400">vs last period</span>
                </div>
                
            </motion.div>
        ))}
    </div>
  )
}

export default Overviewcards