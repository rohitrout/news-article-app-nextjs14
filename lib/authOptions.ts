import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

interface CredentialsType {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
 providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string;};

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null; // No user found with this email
          }

          if (password !== user.password) {
            return null; // Passwords don't match
          }

          return user;
        } catch (error) {
          console.log("error", error);
        }
      },
    }),
 ],

 session: {
    strategy: "jwt",
 },
 secret: process.env.NEXTAUTH_SECRET,
 pages: {
    signIn: "/login",
 },
};
