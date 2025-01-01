import { HelpCircle, User } from "lucide-react"

const Profile = () => {
  return (
    <div className="flex flex-col gap-5 p-6 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg backdrop-blur-lg backdrop-filter">
        <div className="flex items-center gap-5">
            <User size={32} color="rgba(50,0,180,1)"/>
            <h2 className="font-semibold lg:text-xl">Profile</h2>
        </div>
        <div className="flex items-center gap-5">
            <div className="content-center rounded-full size-10 lg:size-16 bg-gradient-to-br from-gray-900 to-gray-900 via-gray-800">
              <HelpCircle  className="mx-auto size-full" color="rgba(20,0,225,1)"/>
            </div>
            <div>
                <p className="font-bold lg:text-xl">Muhamad Galuh Hidayat</p>
                <p className="text-sm text-gray-400">muhamadgaluh31@gmail.com</p>
            </div>
        </div>
        <button className="px-3 py-1 font-bold bg-blue-500 rounded lg:py-2 lg:px-4 w-max hover:bg-blue-700 active:bg-blue-900">Edit Profile</button>
        
    </div>
  )
}

export default Profile