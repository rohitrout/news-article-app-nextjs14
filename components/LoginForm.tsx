"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async  (e: any) => {
    e.preventDefault();

    try{
      const res = await signIn("credentials", {
        email,
         password,
          redirect:false,
      });
      if(!res || res.error){
        setError("Invalid credentails")
        return;
      }
      
      toast.success("Successfully Logged In")
      router.replace("articles")
    } catch(error){
      console.log("Login error", error);
    }
  };

  return (
    <div className="pt-40 flex flex-col items-center justify-center">
      <span className="pt-16 pb-8 text-3xl text-blue-800 font-semibold">LogIn</span>
      <form className="w-[280px] md:w-[500px]" onSubmit={handleSubmit}>
        <input
          onChange={(e)=>setEmail(e.target.value)}
          type="text"
          placeholder="Enter your Email"
          className="shadow-md py-3 my-4 w-full px-4 rounded-lg bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
        />
        <input
          onChange={(e)=> setPassword(e.target.value)}
          type="text"
          placeholder="Enter your Password"
          className="shadow-md py-3 my-4 w-full px-4 rounded-lg bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
        />

        <button
          // onClick={handleSubmit}
          className="shadow-md bg-blue-100 font-semibold text-lg w-full border-2 border-blue-100 hover:ring hover:ring-blue-200 p-2 rounded-lg mt-6"
        >
          LogIn
        </button>

        { error && <p className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-3">{error}</p> }
        
        <p className="text-center pt-4">
          Not yet SignedUp?
          <Link href="/signup">
            <span className="text-blue-500 font-semibold"> Go to SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
