import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",    icon: BarChart2,    color: "#6366f1",    href: "/"
  },
  {
    name: "Products",    icon: ShoppingBag,    color: "#8B5CF6",    href: "/products"
  },
  {
    name: "Users",    icon: Users,    color: "EC4899",    href: "/users"
  },
  {
    name: "Sales",    icon: DollarSign,    color: "#10B981",    href: "/sales"
  },
  {
    name: "Orders",    icon: ShoppingCart,    color: "#F59E0B",    href: "/orders"
  },
  {
    name: "Analytics",    icon: TrendingUp,    color: "#3B82F6",    href: "/analytics"
  },
  {
    name: "Settings",    icon: Settings,    color: "#6EE7B7",    href: "/settings"
  },
];

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
    className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0`}
    animate={{ width: isSidebarOpen ? 256 : 80 }}    
    >
        <div className="flex flex-col h-full bg-gray-800 bg-opacity-50 border border-r border-gray-700 backdrop-blur-md">
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="relative hidden p-2 transition-colors rounded-full top-4 left-6 hover:bg-gray-700 max-w-fit md:block"
            >
              <Menu size={24}/>
              
            </motion.button>
            <nav className="flex-grow mt-8 ">
                {SIDEBAR_ITEMS.map((item) => (
                  <Link to={item.href} key={item.href} className="flex items-center p-4 text-gray-100 duration-100 rounded hover:bg-gray-700 hover:translate-x-5">
                    <motion.div
                    className="flex items-center p-4 mb-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-700" 
                    >
                      <item.icon size={20} style={{color : item.color, minWidth : '20px'}} />
                      <AnimatePresence >
                        {isSidebarOpen && (
                          <motion.span
                          initial={{ opacity: 0, width : 0 }}
                          animate={{ opacity: 1, width : 'auto' }}
                          exit={{ opacity: 0, width : 0 }}
                          transition={{ duration: 0.2, delay: 0.3 }}  
                          className="ml-4 whitespace-nowrap"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                ))}
              </nav>
        </div>
        
    </motion.div>
    
  )
}
export default Sidebar;
