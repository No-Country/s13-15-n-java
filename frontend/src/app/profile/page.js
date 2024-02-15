'use client'
import { useSelector } from "react-redux";
import { userInfo } from "@/store/reducers/userReducer";
import { useRouter } from "next/navigation";
export default function Registro() {
  const user = useSelector(userInfo)
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? <h1>{user.name}</h1> :
        router.push("/")
      }
    </main>
  );
}