"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";

const SignupForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(!name || !email || !password){
      setError('All Fields are necessary')
      return;
    }

    try{

      const userExists = await fetch("api/userExists",{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({email})
      })

      const { user } = await userExists.json();

      if(user){
        setError("User Already exists.");
        return;
      }

      const res = await fetch('api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })

      if(res.ok){
        setName('');
        setEmail('');
        setPassword('');
        setError('');
        toast.success("Registered Succesfully!")
        router.push('/login')
      }else{
        console.log('User Registration failed')
      }

    }catch(error){
      console.log('Error during registration', error);

    }

  };
  console.log('name',name)

  return (
    <div className="pt-40 flex flex-col items-center justify-center">
      <span className="pt-16 pb-8 text-3xl text-blue-800 font-semibold">SignUp</span>
      <form className="w-[280px] md:w-[500px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          className="shadow-md py-3 my-4 w-full px-4 rounded-lg bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
          onChange={(e)=> setName(e.target.value)}
        />

        <input
          onChange={(e)=> setEmail(e.target.value)}
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
          SignUp
        </button>

        
          { error && <p className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-3">{error}</p> }
        

        <p className="text-center pt-4">
          Already SignedUp?
          <Link href="/login">
            <span className="text-blue-500 font-semibold"> Go to Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;

