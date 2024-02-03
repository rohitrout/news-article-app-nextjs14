import LoginForm from "@/components/LoginForm"
import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const Login = async () => {
  const session = await getServerSession(authOptions)

  if(session) redirect("/articles")

  return <LoginForm/>
}

export default Login