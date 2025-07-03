import { Globe } from "lucide-react"

const LangReg = () => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg backdrop-blur-lg backdrop-filter">
        <div className="flex items-center gap-5">
            <Globe size={32} color="rgba(50,0,180,1)"/>
            <h2 className="font-semibold lg:text-xl">Language & Region</h2>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-gray-400">Language</p>
            <select className="px-4 py-2 bg-gray-700 rounded">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
            </select>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-gray-400">Currency</p>
            <select className="px-4 py-2 bg-gray-700 rounded">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
        </div>    
    </div>
  )
}

export default LangReg