import SignupForm from "@/components/SignupForm"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const SignUp = async () => {
  const session = await getServerSession(authOptions)

  if(session) redirect('/articles')
  return <SignupForm/>
}

export default SignUp