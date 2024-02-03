import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/User";
import NextAuth from "next-auth/next";

import  CredentialsProvider  from "next-auth/providers/credentials";
// import { bcrypt } from 'bcryptjs';

export const authOptions:any = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials){
                const { email, password} = credentials;

                try{
                    await connectMongoDB();
                    const user = await User.findOne({email})

                    if(!user){
                        return null; // No user found with this email
                    }

                    if (password !== user.password) {
                        return null; // Passwords don't match
                    }

                    return user;

                }catch(error){
                   console.log('error',error)
                }

            }
        }),
    ],

    session: {
        strategy: "jwt",
    },
    secret:  process.env.NEXTAUTH_SECRET,
    pages: {
        signIn : "/login",
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}