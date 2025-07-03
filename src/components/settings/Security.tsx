import { Lock } from "lucide-react"

const Security = () => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg backdrop-blur-lg backdrop-filter">
        <div className="flex items-center gap-5">
            <Lock size={32} color="rgba(50,0,180,1)"/>
            <h2 className="font-semibold lg:text-xl">Security</h2>
        </div>
        <div className="flex items-center justify-between">
            <p className="text-gray-400">Two factor authentication</p>
            <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
        <button className="px-3 py-1 font-bold bg-blue-500 rounded lg:py-2 lg:px-4 w-max hover:bg-blue-700 active:bg-blue-900">Change Password</button>
    </div>
  )
}

export default Security