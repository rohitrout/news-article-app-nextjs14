import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs"

export async function POST(req:Request){
    try{
        const {name, email, password} = await req.json();
        // const hashedPassword = await bcrypt.hash(password, 10)
        
        await connectMongoDB();
        await User.create({name, email, password})
        
        return NextResponse.json({message: "User Registered"}, {status:  201})

       
    } catch(error){
        return NextResponse.json({message: 'An Error occured while registering.'}, {status:500})
    }
}