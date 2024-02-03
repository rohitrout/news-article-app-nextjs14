import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return <main className="w-full flex flex-col items-center justify-center text-2xl font-semibold text-orange-500 pt-24">
   <span className="text-xl md:text-3xl pt-36 px-3">Welcome to Tenticles!! Read at a go. </span> 
    <Link href={`/articles`}>
      <button className="mx-3 text-xl mt-36 text-[#143C6C] md:text-4xl rounded-full bg-gray-100 border-2 border-indigo-100 px-5 p-3">{session ? "Explore All Articles" : "Please login to View Articles"}</button>
    </Link>
    
    </main>;
}
