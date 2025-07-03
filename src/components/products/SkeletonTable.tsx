import { motion } from "framer-motion"
import { Skeleton } from "../ui/skeleton"



const SkeletonTable = () => {
  return (
    <div className="min-w-full divide-y divide-gray-700 ">
        <Skeleton className="w-full h-8 bg-white/50" />
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pt-6 space-y-6 border-b border-gray-700">
            <Skeleton className="h-5 bg-white/50" />
            <Skeleton className="h-5 bg-white/50" />
            <Skeleton className="h-5 bg-white/50" />
            <Skeleton className="h-5 bg-white/50" />
            <Skeleton className="h-5 bg-white/50" />
        </motion.div>
        
      </div>
  )
}

export default SkeletonTable