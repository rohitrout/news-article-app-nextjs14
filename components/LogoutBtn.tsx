'use client'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

const LogoutBtn = () => {
  const {data} = useSession();
  return (
    <div className="flex items-center gap-4">
      {data && <span className="bg-gray-50 border-2 border-gray-100 rounded-2xl py-2 px-7">Hello, {data?.user?.name}</span>}
      {data && 
    <button className='bg-red-400 rounded-lg text-white px-4 py-2' onClick={()=> signOut()}>logout</button>}
    </div>
  )
}

export default LogoutBtn
