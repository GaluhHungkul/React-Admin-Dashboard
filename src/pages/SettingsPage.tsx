import { motion } from "framer-motion"

import Header from "../components/common/Header"
import Profile from "../components/settings/Profile"
import Notifications from "../components/settings/Notifications"
import Security from "../components/settings/Security"
import LangReg from "../components/settings/LangReg"

const SettingsPage = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
        <Header title="Settings"/>
        <main className="px-4 mx-auto py-7 max-w-7xl lg:px-8">
            <motion.div 
                className="grid w-3/5 grid-cols-1 gap-5 mx-auto mb-8"
                initial={{ opacity: 0, y : 20  }}
                animate={{ opacity: 1, y : 0 }}
                transition={{ delay : .4 }}
            >
                <Profile />
                <Notifications />
                <Security />
                <LangReg />
                
            </motion.div>
        </main>
    </div>
  )
}

export default SettingsPage