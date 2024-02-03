import SignupForm from "@/components/SignupForm"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

const SignUp = async () => {
  const session = await getServerSession(authOptions)

  if(session) redirect('/articles')
  return <SignupForm/>
}

export default SignUp